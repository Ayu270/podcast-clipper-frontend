// import Link from "next/link";
// import {
//   ArrowRight,
//   Check,
//   Captions,
//   Download,
//   Scissors,
//   Sparkles,
//   Upload,
//   Zap,
// } from "lucide-react";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-white text-black">
//       {/* Navbar */}
//       <nav className="border-b border-gray-200">
//         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
//           <Link href="/" className="text-xl font-semibold">
//             podcast<span className="text-gray-400">/clipper</span>
//           </Link>

//           <div className="hidden items-center gap-8 text-sm text-gray-600 md:flex">
//             <a href="#features" className="hover:text-black">
//               Features
//             </a>
//             <a href="#how-it-works" className="hover:text-black">
//               How it works
//             </a>
//             <a href="#pricing" className="hover:text-black">
//               Pricing
//             </a>
//           </div>

//           <Link
//             href="/dashboard"
//             className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
//           >
//             Get Started
//           </Link>
//         </div>
//       </nav>

//       {/* Hero */}
//       <section className="relative overflow-hidden">
//         <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pt-32">
//           <div className="mx-auto max-w-4xl text-center">
//             <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600">
//               <Sparkles size={15} />
//               AI-powered podcast clipping
//             </div>

//             <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
//               Turn your podcasts into
//               <span className="block text-gray-400">
//                 engaging short clips.
//               </span>
//             </h1>

//             <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
//               Upload your podcast and let AI find the best moments,
//               automatically create clips, and get them ready for social media.
//             </p>

//             <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
//               <Link
//                 href="/dashboard"
//                 className="flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 font-medium text-white hover:bg-gray-800"
//               >
//                 Start clipping
//                 <ArrowRight size={17} />
//               </Link>

//               <a
//                 href="#how-it-works"
//                 className="rounded-xl border border-gray-200 px-6 py-3.5 font-medium hover:bg-gray-50"
//               >
//                 How it works
//               </a>
//             </div>

//             <p className="mt-4 text-xs text-gray-400">
//               No subscription · Credits never expire
//             </p>
//           </div>

//           {/* Dashboard Preview */}
//           <div className="mx-auto mt-20 max-w-6xl">
//             <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-2xl">
//               {/* Browser top */}
//               <div className="flex h-10 items-center border-b border-gray-200 bg-gray-50 px-4">
//                 <div className="flex gap-1.5">
//                   <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
//                 </div>
//               </div>

//               <div className="bg-white p-6 md:p-10">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-2xl font-semibold">
//                       Podcast Clipper
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500">
//                       Upload your podcast and get AI-generated clips instantly
//                     </p>
//                   </div>

//                   <div className="hidden rounded-lg bg-black px-4 py-2 text-sm font-medium text-white sm:block">
//                     Buy Credits
//                   </div>
//                 </div>

//                 <div className="mt-8 rounded-xl border border-gray-200 p-6">
//                   <h4 className="font-semibold">Upload Podcast</h4>

//                   <p className="mt-1 text-sm text-gray-500">
//                     Upload your audio or video file to generate clips
//                   </p>

//                   <div className="mt-5 flex min-h-[220px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50">
//                     <div className="rounded-full bg-white p-4 shadow-sm">
//                       <Upload className="text-gray-500" size={28} />
//                     </div>

//                     <p className="mt-4 font-medium">
//                       Drag and drop your file
//                     </p>

//                     <p className="mt-1 text-sm text-gray-400">
//                       or click to browse (MP4 up to 500MB)
//                     </p>

//                     <button className="mt-4 rounded-lg bg-black px-5 py-2 text-sm font-medium text-white">
//                       Select File
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="border-y border-gray-200">
//         <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
//           <Stat value="1 min" label="per credit" />
//           <Stat value="5 min" label="per clip" />
//           <Stat value="AI" label="powered" />
//           <Stat value="0" label="subscriptions" />
//         </div>
//       </section>

//       {/* Features */}
//       <section id="features" className="py-24">
//         <div className="mx-auto max-w-6xl px-6">
//           <div className="max-w-2xl">
//             <p className="text-sm font-semibold text-gray-500">FEATURES</p>

//             <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
//               Everything you need to
//               <span className="text-gray-400"> clip smarter.</span>
//             </h2>

//             <p className="mt-5 text-gray-500">
//               Stop spending hours searching through your podcast for moments
//               worth posting.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-5 md:grid-cols-3">
//             <Feature
//               icon={<Sparkles />}
//               title="AI-generated clips"
//               description="AI finds interesting moments from your podcast and turns them into short-form content."
//             />

//             <Feature
//               icon={<Scissors />}
//               title="Best moments"
//               description="Automatically identify sections of your podcast that have strong clip potential."
//             />

//             <Feature
//               icon={<Captions />}
//               title="Social-ready"
//               description="Create clips designed for short-form platforms like Reels, Shorts and TikTok."
//             />

//             <Feature
//               icon={<Zap />}
//               title="Fast processing"
//               description="Upload your podcast and let the processing pipeline handle the rest."
//             />

//             <Feature
//               icon={<Download />}
//               title="Download clips"
//               description="Access all your generated clips from your dashboard and download them anytime."
//             />

//             <Feature
//               icon={<Check />}
//               title="Simple credits"
//               description="Pay only for the podcast processing you use. No recurring subscription."
//             />
//           </div>
//         </div>
//       </section>

//       {/* How it works */}
//       <section
//         id="how-it-works"
//         className="border-y border-gray-200 bg-gray-50 py-24"
//       >
//         <div className="mx-auto max-w-6xl px-6">
//           <div className="text-center">
//             <p className="text-sm font-semibold text-gray-500">
//               HOW IT WORKS
//             </p>

//             <h2 className="mt-3 text-4xl font-bold tracking-tight">
//               From podcast to clip in
//               <span className="text-gray-400"> three steps.</span>
//             </h2>
//           </div>

//           <div className="mt-14 grid gap-6 md:grid-cols-3">
//             <Step
//               number="01"
//               title="Upload"
//               description="Upload your podcast audio or video file."
//             />

//             <Step
//               number="02"
//               title="AI processes it"
//               description="AI analyzes your podcast and finds potential highlights."
//             />

//             <Step
//               number="03"
//               title="Download"
//               description="Your generated clips appear in My Clips, ready to download."
//             />
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section id="pricing" className="py-24">
//         <div className="mx-auto max-w-6xl px-6">
//           <div className="text-center">
//             <p className="text-sm font-semibold text-gray-500">PRICING</p>

//             <h2 className="mt-3 text-4xl font-bold">
//               Simple, one-time pricing.
//             </h2>

//             <p className="mx-auto mt-4 max-w-xl text-gray-500">
//               Buy credits when you need them. No monthly subscription.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-5 md:grid-cols-3">
//             <Price
//               name="Small Pack"
//               price="₹999"
//               credits="50 credits"
//               description="Perfect for occasional podcast creators"
//             />

//             <Price
//               name="Medium Pack"
//               price="₹2,499"
//               credits="150 credits"
//               description="Best value for regular podcasters"
//               popular
//             />

//             <Price
//               name="Large Pack"
//               price="₹6,999"
//               credits="500 credits"
//               description="Ideal for podcast studios and agencies"
//             />
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-6 pb-24">
//         <div className="mx-auto max-w-6xl rounded-3xl bg-black px-6 py-20 text-center text-white">
//           <Sparkles className="mx-auto" size={28} />

//           <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
//             Your next great clip is already inside your podcast.
//           </h2>

//           <p className="mx-auto mt-5 max-w-xl text-gray-400">
//             Upload your first episode and let AI find the moments worth
//             sharing.
//           </p>

//           <Link
//             href="/dashboard"
//             className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black hover:bg-gray-100"
//           >
//             Start clipping
//             <ArrowRight size={17} />
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-gray-200 py-8">
//         <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
//           <div className="font-semibold">
//             podcast<span className="text-gray-400">/clipper</span>
//           </div>

//           <p className="text-sm text-gray-400">
//             © 2026 Podcast Clipper
//           </p>
//         </div>
//       </footer>
//     </main>
//   );
// }

// /* Components */

// function Stat({
//   value,
//   label,
// }: {
//   value: string;
//   label: string;
// }) {
//   return (
//     <div className="border-r border-gray-200 px-6 py-8 text-center last:border-r-0">
//       <div className="text-2xl font-bold">{value}</div>
//       <div className="mt-1 text-sm text-gray-400">{label}</div>
//     </div>
//   );
// }

// function Feature({
//   icon,
//   title,
//   description,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
//       <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
//         {icon}
//       </div>

//       <h3 className="mt-6 text-lg font-semibold">{title}</h3>

//       <p className="mt-2 text-sm leading-6 text-gray-500">
//         {description}
//       </p>
//     </div>
//   );
// }

// function Step({
//   number,
//   title,
//   description,
// }: {
//   number: string;
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-gray-200 bg-white p-8">
//       <div className="text-sm font-bold text-gray-300">{number}</div>

//       <h3 className="mt-8 text-2xl font-semibold">{title}</h3>

//       <p className="mt-3 text-sm leading-6 text-gray-500">
//         {description}
//       </p>
//     </div>
//   );
// }

// function Price({
//   name,
//   price,
//   credits,
//   description,
//   popular = false,
// }: {
//   name: string;
//   price: string;
//   credits: string;
//   description: string;
//   popular?: boolean;
// }) {
//   return (
//     <div
//       className={`relative rounded-2xl border p-7 ${
//         popular ? "border-black shadow-lg" : "border-gray-200"
//       }`}
//     >
//       {popular && (
//         <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-xs font-semibold text-white">
//           Most Popular
//         </div>
//       )}

//       <h3 className="font-medium">{name}</h3>

//       <div className="mt-3 text-4xl font-bold">{price}</div>

//       <p className="mt-3 text-sm text-gray-500">{description}</p>

//       <div className="my-7 space-y-3">
//         <Item>{credits}</Item>
//         <Item>No expiration</Item>
//         <Item>Download all clips</Item>
//       </div>

//       <Link
//         href="/dashboard/billing"
//         className={`block rounded-lg px-4 py-3 text-center text-sm font-semibold ${
//           popular
//             ? "bg-black text-white hover:bg-gray-800"
//             : "border border-gray-200 hover:bg-gray-50"
//         }`}
//       >
//         Buy {credits}
//       </Link>
//     </div>
//   );
// }

// function Item({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex items-center gap-2 text-sm">
//       <Check size={16} />
//       {children}
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Captions,
  Download,
  Play,
  Scissors,
  Sparkles,
  Upload,
  Zap,
} from "lucide-react";
import { BackgroundRippleEffect } from "~/components/ui/background-ripple-effect";

//import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight"
          >
            podcast
            <span className="text-gray-400">/clipper</span>
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-8 text-sm text-gray-500 md:flex">
            <a
              href="#features"
              className="transition-colors hover:text-black"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="transition-colors hover:text-black"
            >
              How it works
            </a>

            <a
              href="#pricing"
              className="transition-colors hover:text-black"
            >
              Pricing
            </a>
          </div>

          {/* CTA */}
          <Link
            href="/dashboard"
            className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden pt-16">
        {/* Ripple background */}
        <div className="pointer-events-none absolute inset-0">
          <BackgroundRippleEffect
            rows={12}
            cols={36}
            cellSize={56}
            className="top-[-80px]"
          />

          {/* Fade the grid */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white" />

          {/* Subtle center glow */}
          <div className="absolute left-1/2 top-[300px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gray-100/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-28">
          {/* Hero content */}
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-sm text-gray-600 shadow-sm backdrop-blur">
              <Sparkles size={15} />

              <span>AI-powered podcast clipping</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-[76px]">
              Turn your podcasts into
              <span className="block text-gray-400">
                engaging short clips.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
              Upload your podcast and let AI find the best moments,
              automatically create clips, and get them ready for social media.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="group flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-gray-800"
              >
                Start clipping

                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#how-it-works"
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white/90 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-gray-50"
              >
                <Play size={15} />
                How it works
              </a>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              No subscription · Credits never expire
            </p>
          </div>

          {/* =================================================
              PRODUCT PREVIEW
          ================================================= */}
          <div className="relative mx-auto mt-14 max-w-6xl">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.12)]">
              {/* Browser bar */}
              <div className="flex h-11 items-center border-b border-gray-200 bg-gray-50 px-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                </div>

                <div className="mx-auto hidden rounded-md bg-white px-24 py-1 text-[10px] text-gray-400 shadow-sm sm:block">
                  podcastclipper.app/dashboard
                </div>
              </div>

              {/* Dashboard preview */}
              <div className="bg-white p-6 md:p-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">
                      Podcast Clipper
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Upload your podcast and get AI-generated clips instantly
                    </p>
                  </div>

                  <div className="hidden rounded-lg bg-black px-4 py-2 text-sm font-medium text-white sm:block">
                    Buy Credits
                  </div>
                </div>

                {/* Upload card */}
                <div className="mt-8 rounded-xl border border-gray-200 p-6">
                  <h4 className="font-semibold">
                    Upload Podcast
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    Upload your audio or video file to generate clips
                  </p>

                  <div className="mt-5 flex min-h-[210px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50">
                    <div className="rounded-full bg-white p-4 shadow-sm">
                      <Upload
                        size={27}
                        className="text-gray-500"
                      />
                    </div>

                    <p className="mt-4 text-sm font-medium">
                      Drag and drop your file
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      or click to browse (MP4 up to 500MB)
                    </p>

                    <button
                      type="button"
                      className="mt-4 rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                    >
                      Select File
                    </button>
                  </div>
                </div>

                {/* Preview stats */}
                <div className="mt-6 hidden grid-cols-3 gap-4 md:grid">
                  <PreviewStat
                    title="Processing"
                    value="AI analysis"
                  />

                  <PreviewStat
                    title="Clips"
                    value="Auto generated"
                  />

                  <PreviewStat
                    title="Output"
                    value="Social ready"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
          <Stat
            value="1 min"
            label="per credit"
          />

          <Stat
            value="5 min"
            label="per clip"
          />

          <Stat
            value="AI"
            label="powered"
          />

          <Stat
            value="0"
            label="subscriptions"
          />
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section
        id="features"
        className="bg-white py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-gray-500">
              FEATURES
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Everything you need to
              <span className="text-gray-400">
                {" "}
                clip smarter.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              Stop spending hours searching through your podcast
              for moments worth posting.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <FeatureCard
              icon={<Sparkles size={21} />}
              title="AI-generated clips"
              description="AI finds interesting moments from your podcast and turns them into short-form content."
            />

            <FeatureCard
              icon={<Scissors size={21} />}
              title="Find the best moments"
              description="Automatically identify sections of your podcast that have strong clip potential."
            />

            <FeatureCard
              icon={<Captions size={21} />}
              title="Social-ready"
              description="Create clips designed for platforms like Reels, Shorts and TikTok."
            />

            <FeatureCard
              icon={<Zap size={21} />}
              title="Fast processing"
              description="Upload your podcast and let the processing pipeline handle the rest."
            />

            <FeatureCard
              icon={<Download size={21} />}
              title="Download everything"
              description="Access your generated clips from your dashboard and download them anytime."
            />

            <FeatureCard
              icon={<Check size={21} />}
              title="Simple credits"
              description="Pay only for the podcast processing you use. No recurring subscription."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section
        id="how-it-works"
        className="border-y border-gray-200 bg-gray-50 py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-gray-500">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              From podcast to clip in
              <span className="text-gray-400">
                {" "}
                three steps.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-gray-500">
              No complicated editing software. Upload, process,
              and download.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <StepCard
              number="01"
              title="Upload"
              description="Upload your podcast audio or video file directly to Podcast Clipper."
            />

            <StepCard
              number="02"
              title="Let AI work"
              description="Our processing pipeline analyzes your podcast and finds potential highlights."
            />

            <StepCard
              number="03"
              title="Download"
              description="Your clips appear in My Clips. Download them and publish wherever you want."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICING
      ===================================================== */}
      <section
        id="pricing"
        className="bg-white py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-gray-500">
              PRICING
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Simple, one-time pricing.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-gray-500">
              Buy credits when you need them. No monthly subscription
              and no expiring credits.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <PricingCard
              name="Small Pack"
              price="₹999"
              credits="50 credits"
              description="Perfect for occasional podcast creators"
            />

            <PricingCard
              name="Medium Pack"
              price="₹2,499"
              credits="150 credits"
              description="Best value for regular podcasters"
              popular
            />

            <PricingCard
              name="Large Pack"
              price="₹6,999"
              credits="500 credits"
              description="Ideal for podcast studios and agencies"
            />
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            1 credit = 1 minute of podcast processing
          </p>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-black px-6 py-20 text-center text-white">
          {/* Decorative rings */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white" />

            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white" />

            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white" />
          </div>

          <div className="relative z-10">
            <Sparkles
              className="mx-auto"
              size={28}
            />

            <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
              Your next great clip is already inside your podcast.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-gray-400">
              Upload your first episode and let AI find the moments
              worth sharing.
            </p>

            <Link
              href="/dashboard"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100"
            >
              Start clipping

              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <Link
            href="/"
            className="font-semibold"
          >
            podcast
            <span className="text-gray-400">
              /clipper
            </span>
          </Link>

          <p className="text-sm text-gray-400">
            © 2026 Podcast Clipper. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ============================================================
   SMALL COMPONENTS
============================================================ */

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-r border-gray-200 px-6 py-8 text-center last:border-r-0">
      <div className="text-2xl font-bold">
        {value}
      </div>

      <div className="mt-1 text-sm text-gray-400">
        {label}
      </div>
    </div>
  );
}

function PreviewStat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <p className="text-xs text-gray-400">
        {title}
      </p>

      <p className="mt-1 text-sm font-medium">
        {value}
      </p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 transition-colors group-hover:bg-black group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-lg">
      <div className="text-sm font-bold text-gray-300">
        {number}
      </div>

      <h3 className="mt-8 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}

function PricingCard({
  name,
  price,
  credits,
  description,
  popular = false,
}: {
  name: string;
  price: string;
  credits: string;
  description: string;
  popular?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-7 transition hover:-translate-y-1 ${
        popular
          ? "border-black shadow-xl"
          : "border-gray-200 hover:shadow-lg"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-xs font-semibold text-white">
          Most Popular
        </div>
      )}

      <h3 className="font-medium">
        {name}
      </h3>

      <div className="mt-3 text-4xl font-bold">
        {price}
      </div>

      <p className="mt-3 text-sm text-gray-500">
        {description}
      </p>

      <div className="my-7 h-px bg-gray-100" />

      <div className="space-y-3">
        <PricingItem>
          {credits}
        </PricingItem>

        <PricingItem>
          No expiration
        </PricingItem>

        <PricingItem>
          Download all clips
        </PricingItem>
      </div>

      <Link
        href="/dashboard/billing"
        className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition ${
          popular
            ? "bg-black text-white hover:bg-gray-800"
            : "border border-gray-200 hover:bg-gray-50"
        }`}
      >
        Buy {credits}
      </Link>
    </div>
  );
}

function PricingItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Check size={16} />
      {children}
    </div>
  );
}