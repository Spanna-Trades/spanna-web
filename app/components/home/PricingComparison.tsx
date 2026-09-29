"use client"

import { motion } from "motion/react"

import Section from "@/app/elements/layout/Section";
import SectionHeader from "@/app/elements/layout/SectionHeading";

function PricingCard({
  index,
  label,
  title,
  subtitle,
  features
}: {
  index: number
  label: string;
  title: string;
  subtitle: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 * (index + 1) }}
      viewport={{ amount: 0.4, once: true }}
      className="relative rounded-2xl border p-7 border-slate-200 bg-paper transition hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(10,79,255,0.09)]"
    >
      <div className="mb-4 text-xs font-extrabold uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <h3 className="mb-4 text-md font-bold tracking-[-0.5px] text-slate-900">{title}</h3>
      <p className="mb-6 text-xs text-slate-500">{subtitle}</p>
      <ul className="space-y-2.5 text-xs leading-5 text-slate-500">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <span className="mt-0.5 text-base font-extrabold text-green">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div >
  );
}

const PricingComparison = () => (
  <Section id="pricing" background="white">
    <div className="mx-auto max-w-7xl">
      <SectionHeader
        subheading="Pricing"
        heading="No hidden fees or payments"
        description="No subscriptions. No monthly fees. No upfront anything. Our fee comes out of the job, only once it&apos;s complete."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <PricingCard
          index={0}
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
          index={1}
          label="For tradespeople"
          title="2.5% on completed jobs"
          subtitle="No lead fees. No subscriptions. Nothing until you've done the work and been paid. Compare that to what other platforms take."
          features={[
            "Pay nothing until the job is done and money is in your account",
            "Hit 20 completed jobs in a year and your rate drops to 2%",
            "Fee applies to the total job value",
            "Your call-out fee stays with you even if the customer declines the final quote",
          ]}
        />
      </div>

      <p className="mt-6 max-w-155 text-xs text-slate-500">
        Pricing is indicative and subject to final confirmation pending regulatory consultation. We&apos;ll always tell you exactly what we take and why — before you commit to anything.
      </p>
    </div>
  </Section>
)

export default PricingComparison;