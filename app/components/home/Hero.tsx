import Grainient from "../../elements/Grainient";

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
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
    </section>
  )
}

export default Hero;