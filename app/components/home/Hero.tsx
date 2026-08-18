import GlassSurface from "@/app/elements/GlassSurface";
import Grainient from "../../elements/Grainient";
import Image from "next/image";
import Button from "@/app/elements/inputs/Button";

const heroMockupImage = "/mockups/hero-mockup.png"

const Hero = () => {
  return (
    <section className="relative h-full lg:h-screen w-full">
      <div className="absolute inset-0 w-full h-full z-0">
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
      <div className="max-w-7xl mx-auto relative h-full flex items-center flex-wrap gap-4 lg:gap-8 px-8 sm:px-12 md:px-16 pt-32 pb-24">
        <div className="flex-1">
          <GlassSurface height="fit-content" width="100%" className="p-8">
            <div className="w-full flex items-start flex-col gap-4">
              <span className="mb-2 rounded-full border border-blue-line bg-blue-soft px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-blue">
                Launching in Gauteng soon
              </span>
              <h1 className="text-4xl sm:text-6xl">
                Making jobs crystal clear for
                <div className="relative max-h-10 block sm:max-h-15 overflow-hidden mt-2">
                  <div className="flex flex-col animate-loop-text text-blue">
                    <span className="overflow-hidden">homeowners</span>
                    <span className="overflow-hidden">plumbers</span>
                    <span className="overflow-hidden">electricians</span>
                    <span className="overflow-hidden">homeowners</span>
                  </div>
                </div>
              </h1>
              <p className="max-w-full sm:max-w-4/5">Spanna connects homeowners with verified electricians and plumbers. You see the price before work starts. Your money moves only when the job is done. That&apos;s it.</p>
              <div className="flex flex-wrap gap-2">
                <Button href="#how-it-works">See how it works</Button>
                <Button href="#interest" variant="secondary">
                  Get notified
                </Button>
              </div>
            </div>
          </GlassSurface>
        </div>
        <div className="-mb-32 md:mb-0 flex-1 h-full w-auto min-w-full lg:min-w-100">
          <Image src={heroMockupImage} alt="App mockup" loading="eager" priority height={400} width={400} sizes="(max-width: 768px) 100vw, 50vw" className="aspect-square w-full h-auto" />
        </div>
      </div>
    </section>
  )
}

export default Hero;