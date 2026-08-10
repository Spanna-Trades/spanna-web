"use client";

import Image from "next/image";
import Grainient from "./components/Grainient";
import GlassSurface from "./components/GlassSurface";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="absolute top-o left-0 w-full h-full z-0">
        <Grainient
          color1="#eef3ff"
          color2="#f7f9fc"
          color3="#0a4fff"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      <GlassSurface
        width="90%" 
        height="80%"
        borderRadius={50}
        className="w-full h-fit max-w-3xl"
      >
        <main className="z-1 flex w-full h-fit max-w-3xl flex-col items-center justify-start gap-12 py-16 px-16 sm:items-start">
          <Image
            className="w-[100px]"
            src="/spanna-trades-logo.png"
            alt="Next.js logo"
            width={100}
            height={100}
            priority
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
              Spanna means trades you can trust.
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600">
              Spanna connects homeowners with verified electricians and plumbers. You see the price before work starts. Your money moves only when the job is done. That&apos;s it.
            </p>
          </div>
        </main>
      </GlassSurface>
    </div>
  );
}
