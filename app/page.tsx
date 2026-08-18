import Section from "./elements/layout/Section";
import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import Benefits from "./components/home/Benefits";
import ComparisonTable from "./components/home/ComparisonTable";
import PricingComparison from "./components/home/PricingComparison";
import InterestForms from "./components/home/InterestForms";

const stats = [
  { value: "3", suffix: "×", label: "Faster than making three\nphone calls for quotes" },
  { value: "R0", label: "Upfront cost for pros\nto join and start quoting" },
  { value: "7", label: "Days to flag a problem\nbefore your pro gets paid" },
];


export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-paper text-slate-900">
      <Hero />
      <Section background="deep-blue" extendedClasses="px-4 py-12 sm:px-6 lg:px-8 -mt-8!">
        <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1.5">
              <div className="text-[clamp(32px,5vw,52px)] font-bold tracking-[-1px] text-white">
                {stat.value}
                {stat.suffix && <span className="text-[#8fb4ff]">{stat.suffix}</span>}
              </div>
              <div className="text-[13px] font-semibold leading-5 text-[#8fb4ff] whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <HowItWorks />
      <Benefits />
      <ComparisonTable />
      <PricingComparison />
      <InterestForms />

      <div className="demo-bar fixed inset-x-0 bottom-0 z-50 block bg-blue px-5 py-3.5 text-center shadow-[0_-4px_20px_rgba(10,79,255,0.2)] rounded-t-2xl md:hidden">
        <a href="https://thatguysaccount.github.io/Spanna/Demo" target="_blank" className="flex items-center justify-center gap-2 text-[15px] font-bold text-white">
          Try the interactive demo
        </a>
      </div>
    </main>
  );
}



