import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import Benefits from "./components/home/Benefits";
import ComparisonTable from "./components/home/ComparisonTable";
import PricingComparison from "./components/home/PricingComparison";
import InterestForm from "./components/home/InterestForm";
import CalloutCards from "./components/home/CalloutCards";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-paper text-slate-900">
      <Hero />
      <CalloutCards />
      <HowItWorks />
      <Benefits />
      <ComparisonTable />
      <PricingComparison />
      <InterestForm />

      <div className="demo-bar fixed inset-x-0 bottom-0 z-50 block bg-blue px-5 py-3.5 text-center shadow-[0_-4px_20px_rgba(10,79,255,0.2)] rounded-t-2xl md:hidden">
        <a href="https://thatguysaccount.github.io/Spanna/Demo" target="_blank" className="flex items-center justify-center gap-2 text-[15px] font-bold text-white">
          Try the interactive demo
        </a>
      </div>
    </main>
  );
}



