// import { env } from "~/env";
// import { inngest } from "./client";
// import { db } from "~/server/db";
// import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

// export const processVideo = inngest.createFunction(
//   { 
//     id: "process-video",
//     retries: 1,
//     concurrency: {
//         limit: 1,
//         key: "event.data.userId",
//     },
//     //event: "process-video-event"   //{ id: "process-video", triggers: { event: "app/video.process" } },
//     triggers: {
//       event: "process-video-event",
//     },
//   },
//   async ({ event, step }) => {
//     //const { uploadedFileId } = event.data;
//     const uploadedFileId = event.data?.uploadedFileId;

//     if (!uploadedFileId) {
//       console.error("Invalid Inngest event:", event.data);
//       throw new Error("Missing uploadedFileId in process-video-event");
//     }

//     try{
//       const { userId, credits, s3Key } = await step.run("check_credits", async () => {
//          const uploadedFile = await db.uploadedFile.findUniqueOrThrow({
//             where: {
//                 id: uploadedFileId,
//             },
//             select: {
//                 user: {
//                     select: {
//                         id: true,
//                         credits: true,
//                     },
//                 },
//                 s3Key: true,
//             },
//        });

//        return {
//             userId: uploadedFile.user.id,
//             credits: uploadedFile.user.credits,
//             s3Key: uploadedFile.s3Key,
//           };
//     });


//     if (credits > 0) {
//         await step.run("set-status-processing", async () => {
//           await db.uploadedFile.update({
//             where: {
//               id: uploadedFileId,
//             },
//             data: {
//               status: "processing",
//             },
//           });
//         });


//         await step.run("call-modal-endpoint", async () => {
//            await fetch(env.PROCESS_VIDEO_ENDPOINT, {
//               method: "POST",
//               body: JSON.stringify({ s3_key: s3Key }),
//               headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${env.PROCESS_VIDEO_ENDPOINT_AUTH}`,
//               },
//            });
//         });

//         const { clipsFound } = await step.run(
//           "create-clips-in-db",
//           async () => {
//             const folderPrefix = s3Key.split("/")[0]!;

//             const allKeys = await listS3ObjectsByPrefix(folderPrefix);

//             const clipKeys = allKeys.filter(
//               (key): key is string =>
//                 key !== undefined && !key.endsWith("original.mp4"),
//             );

//             if (clipKeys.length > 0) {
//               await db.clip.createMany({
//                 data: clipKeys.map((clipKey) => ({
//                   s3Key: clipKey,
//                   uploadedFileId,
//                   userId,
//                 })),
//               });
//             }

//             return { clipsFound: clipKeys.length };
//           },
//         );

//         await step.run("deduct-credits", async () => {
//           await db.user.update({
//             where: {
//               id: userId,
//             },
//             data: {
//               credits: {
//                 decrement: Math.min(credits, clipsFound),
//               },
//             },
//           });
//         });

//          await step.run("set-status-processed", async () => {
//           await db.uploadedFile.update({
//             where: {
//               id: uploadedFileId,
//             },
//             data: {
//               status: "processed",
//             },
//           });
//         });
//     } else {
//         await step.run("set-status-no-credits", async () => {
//           await db.uploadedFile.update({
//             where: {
//               id: uploadedFileId,
//             },
//             data: {
//               status: "no credits",
//             },
//           });
//         });
//       }

//     }
//     catch (error){
//       await db.uploadedFile.update({
//             where: {
//               id: uploadedFileId,
//             },
//             data: {
//               status: "failed",
//             },
//           });
//     }   
//   },
// );

// async function listS3ObjectsByPrefix(prefix: string) {
//   const s3Client = new S3Client({
//     region: env.AWS_REGION,
//     credentials: {
//       accessKeyId: env.AWS_ACCESS_KEY_ID,
//       secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
//     },
//   });

//   const listCommand = new ListObjectsV2Command({
//     Bucket: env.S3_BUCKET_NAME,
//     Prefix: prefix,
//   });

//   const response = await s3Client.send(listCommand);
//   return response.Contents?.map((item) => item.Key).filter(Boolean) || [];
// }

import { env } from "~/env";
import { inngest } from "./client";
import { db } from "~/server/db";
import {
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";

type ProcessVideoEventData = {
  uploadedFileId?: unknown;
  userId?: unknown;
};

type CreditCheckResult = {
  userId: string;
  credits: number;
  s3Key: string;
};

export const processVideo = inngest.createFunction(
  {
    id: "process-video",
    retries: 1,
    concurrency: {
      limit: 1,
      key: "event.data.userId",
    },
    triggers: {
      event: "process-video-event",
    },
  },

  async ({ event, step }) => {
    /*
     * Inngest's event.data can be untyped/any when no event schema
     * is configured. Treat it as unknown and validate what we need.
     */
    const eventData = event.data as ProcessVideoEventData;

    const uploadedFileId =
      typeof eventData.uploadedFileId === "string"
        ? eventData.uploadedFileId
        : undefined;

    if (!uploadedFileId) {
      console.error("Invalid Inngest event:", event.data);
      throw new Error("Missing uploadedFileId in process-video-event");
    }

    try {
      const creditCheck = await step.run(
        "check_credits",
        async (): Promise<CreditCheckResult> => {
          const uploadedFile =
            await db.uploadedFile.findUniqueOrThrow({
              where: {
                id: uploadedFileId,
              },
              select: {
                user: {
                  select: {
                    id: true,
                    credits: true,
                  },
                },
                s3Key: true,
              },
            });

          return {
            userId: uploadedFile.user.id,
            credits: uploadedFile.user.credits,
            s3Key: uploadedFile.s3Key,
          };
        },
      );

      const { userId, credits, s3Key } = creditCheck;

      if (credits > 0) {
        await step.run("set-status-processing", async () => {
          await db.uploadedFile.update({
            where: {
              id: uploadedFileId,
            },
            data: {
              status: "processing",
            },
          });
        });

        await step.fetch(env.PROCESS_VIDEO_ENDPOINT, {
          method: "POST",
          body: JSON.stringify({ s3_key: s3Key }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${env.PROCESS_VIDEO_ENDPOINT_AUTH}`,
          },
        });

        // await step.run("call-modal-endpoint", async () => {
        //   const response = await fetch(
        //     env.PROCESS_VIDEO_ENDPOINT,
        //     {
        //       method: "POST",
        //       body: JSON.stringify({
        //         s3_key: s3Key,
        //       }),
        //       headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${env.PROCESS_VIDEO_ENDPOINT_AUTH}`,
        //       },
        //     },
        //   );

        //   if (!response.ok) {
        //     throw new Error(
        //       `Video processing endpoint failed: ${response.status} ${response.statusText}`,
        //     );
        //   }
        // });

        const clipsResult = await step.run(
          "create-clips-in-db",
          async (): Promise<{ clipsFound: number }> => {
            const folderPrefix = s3Key.split("/")[0] ?? "";

            if (!folderPrefix) {
              throw new Error("Invalid S3 key: missing folder prefix");
            }

            const allKeys = await listS3ObjectsByPrefix(folderPrefix);

            const clipKeys = allKeys.filter(
              (key) =>
                key !== undefined &&
                !key.endsWith("original.mp4"),
            );

            if (clipKeys.length > 0) {
              await db.clip.createMany({
                data: clipKeys.map((clipKey) => ({
                  s3Key: clipKey,
                  uploadedFileId,
                  userId,
                })),
              });
            }

            return {
              clipsFound: clipKeys.length,
            };
          },
        );

        const { clipsFound } = clipsResult;

        await step.run("deduct-credits", async () => {
          await db.user.update({
            where: {
              id: userId,
            },
            data: {
              credits: {
                decrement: Math.min(credits, clipsFound),
              },
            },
          });
        });

        await step.run("set-status-processed", async () => {
          await db.uploadedFile.update({
            where: {
              id: uploadedFileId,
            },
            data: {
              status: "processed",
            },
          });
        });
      } else {
        await step.run("set-status-no-credits", async () => {
          await db.uploadedFile.update({
            where: {
              id: uploadedFileId,
            },
            data: {
              status: "no credits",
            },
          });
        });
      }
    } catch (error) {
      console.error("Video processing failed:", error);

      await db.uploadedFile.update({
        where: {
          id: uploadedFileId,
        },
        data: {
          status: "failed",
        },
      });

      throw error;
    }
  },
);

async function listS3ObjectsByPrefix(
  prefix: string,
): Promise<string[]> {
  const s3Client = new S3Client({
    region: env.AWS_REGION,
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    },
  });

  const listCommand = new ListObjectsV2Command({
    Bucket: env.S3_BUCKET_NAME,
    Prefix: prefix,
  });

  const response = await s3Client.send(listCommand);

  return (
    response.Contents
      ?.map((item) => item.Key)
      .filter((key): key is string => key !== undefined) ?? []
  );
}