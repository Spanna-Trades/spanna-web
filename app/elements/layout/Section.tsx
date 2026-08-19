import { PropsWithChildren } from "react";
import Grainient from "../Grainient";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "grainent" | "white" | "paper" | "deep-blue"
  extendedClasses?: string
}

const Section = ({ background = "paper", extendedClasses = "", children, ...props }: PropsWithChildren<SectionProps>) => (
  <section className={`relative mx-auto px-8 sm:px-12 md:px-16 pt-16 pb-32 -mt-16 rounded-t-2xl overflow-hidden bg-${background} ${extendedClasses}`} {...props}>
    {background === "grainent" &&
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
        className="absolute top-0 left-0 right-0 bottom-0"
      />
    }
    {children}
  </section>
)

export default Section;