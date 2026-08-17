import Section from "@/app/elements/layout/Section";
import SectionHeader from "@/app/elements/layout/SectionHeading";

const steps = [
  {
    title: "Tell us what's broken",
    text: "Post your job in two minutes. Add photos, describe the problem, say when you need someone. That's it from you for now.",
  },
  {
    title: "Compare verified pros",
    text: "Verified electricians and plumbers send you a call-out fee, a rough price, and when they can be there. Their ratings and track record sit right next to their quote.",
  },
  {
    title: "The real price gets locked in",
    text: "Your pro arrives, inspects the job, and sets the final price. That price is locked. We hold your money until you're happy. If you don't like the price, you walk away and only pay the call-out fee.",
  },
  {
    title: "Your pro gets paid when the job is done",
    text: "Approve the work and your pro gets paid. Not happy? Tell us within 7 days. Your money doesn't move until it's sorted.",
  },
];

function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-paper p-6 sm:p-7">
      <span className="mb-4 inline-block rounded-full border border-blue-line bg-blue-soft px-2.5 py-1 text-[11px] font-extrabold tracking-[1.5px] text-blue">
        {number}
      </span>
      <h3 className="mb-2 text-[17px] font-bold tracking-[-0.4px] text-slate-900">{title}</h3>
      <p className="text-[13.5px] leading-6 text-slate-500">{text}</p>
    </div>
  );
}

const HowItWorks = () => (
  <Section id="how-it-works" background="white">
    <div className="max-w-7xl mx-auto">
      <SectionHeader subheading="How it works" heading="Four steps. Zero stress." description="No WhatsApp chasing. No cash-in-hand ambiguity. No waking up the next day wondering if the job was actually done right." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <StepCard key={step.title} number={`STEP ${index + 1}`} title={step.title} text={step.text} />
        ))}
      </div>
    </div>
  </Section>
)

export default HowItWorks;