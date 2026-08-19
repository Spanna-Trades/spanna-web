import Section from "@/app/elements/layout/Section";
import SectionHeader from "@/app/elements/layout/SectionHeading";

function PricingCard({
  label,
  title,
  subtitle,
  features,
  featured = false,
}: {
  label: string;
  title: string;
  subtitle: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-7 ${featured ? "border-blue bg-blue-soft" : "border-slate-200 bg-paper"}`}
    >
      {featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-blue px-3 py-1 text-[10px] font-extrabold uppercase tracking-[1px] text-white">
          Best value
        </span>
      )}

      <div className={`mb-4 text-[11px] font-extrabold uppercase tracking-[1.5px] ${featured ? "text-blue" : "text-slate-500"}`}>
        {label}
      </div>
      <h3 className="mb-2 text-[22px] font-bold tracking-[-0.5px] text-slate-900">{title}</h3>
      <p className="mb-6 text-[13px] leading-6 text-slate-500">{subtitle}</p>
      <ul className="space-y-2.5 text-[13.5px] leading-5 text-slate-500">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <span className="mt-0.5 text-base font-extrabold text-green">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const PricingComparison = () => (
  <Section id="pricing" background="white">
    <div className="mx-auto max-w-7xl">
      <SectionHeader subheading="Pricing" heading="You only pay when the job is done" description="            No subscriptions. No monthly fees. No upfront anything. Our fee comes out of the job, only once it&apos;s complete." />

      <div className="grid gap-5 lg:grid-cols-3">
        <PricingCard
          label="For homeowners"
          title="3.5% on the job total"
          subtitle="One Spanna fee, shown up front before you approve anything. Covers safe payment handling, real support, and a cover fund if things go sideways."
          features={[
            "Transparent to the rand before you commit",
            "Includes a 7-day window to flag problems after the job",
            "R50 booking fee on call-out, credited back on completion",
            "Regular customers who use us often qualify for a reduced rate",
          ]}
        />
        <PricingCard
          label="For tradespeople"
          title="2.5% on completed jobs only"
          subtitle="No lead fees. No subscriptions. Nothing until you've done the work and been paid. Compare that to what other platforms take."
          features={[
            "Pay nothing until the job is done and money is in your account",
            "Hit 20 completed jobs in a year and your rate drops to 2%",
            "Fee applies to the total job value",
            "Your call-out fee stays with you even if the customer declines the final quote",
          ]}
          featured
        />
        <PricingCard
          label="The cover fund"
          title="1% on every completed job"
          subtitle="A small portion of each job goes into a ring-fenced fund. It pays for dispute resolution and covers any liability if something serious goes wrong."
          features={[
            "Already included in the customer's 3.5% all-in fee",
            "Ring-fenced — never touched for operating costs",
            "Gives both sides real recourse when things go wrong",
            "The fund that makes \"Trades you can trust\" more than a tagline",
          ]}
        />
      </div>

      <p className="mt-6 max-w-155 text-[12px] leading-7 text-slate-500">
        Pricing is indicative and subject to final confirmation pending regulatory consultation. We&apos;ll always tell you exactly what we take and why — before you commit to anything.
      </p>
    </div>
  </Section>
)

export default PricingComparison;