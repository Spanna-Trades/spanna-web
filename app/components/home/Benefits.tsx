"use client";

import { motion } from "motion/react"

import Section from "@/app/elements/layout/Section";
import SectionHeader from "@/app/elements/layout/SectionHeading";
import { useMemo, useState } from "react";
import Icon, { IconKey } from "@/app/elements/Icon";

type TabKey = "homeowner" | "pro";

type Benefit = {
  index?: number;
  icon: IconKey;
  title: string;
  description: string;
};

const benefits: Record<TabKey, Benefit[]> = {
  homeowner: [
    {
      icon: "lock",
      title: "Your money is protected until you're happy",
      description: "We hold every rand until you approve the work. No more mid-job price blowouts. Once your pro sets the final price, it cannot change. You'll get 7 days to flag a problem and your money is not released until it is resolved.",
    },
    {
      icon: "user-check",
      title: "Every pro is verified before they quote",
      description: "CIPC registration, trade certifications, public liability insurance, ID verification. We check all of it to ensure that you don't waste time on posers who don't know what they're doing.",
    },
    {
      icon: "comment-check",
      title: "Real reviews from real customers",
      description: "Every rating on Spanna comes from a verified, completed job. No fake reviews, no anonymous opinions. Just honest feedback from people who've seen a job through with the pro.",
    },
    {
      icon: "comparison",
      title: "See their track record before you choose",
      description: "How often do they show up on time? Does their final price in the ball park of their rough quote? We give you all the relevant stats on a pro so you can make an informed decision.",
    },
  ],
  pro: [
    {
      icon: "money-out",
      title: "Your money is guaranteed before you lift a tool",
      description: "The client pays the full job amount to us before work begins. No more chasing invoices. No more trusting a stranger's word that they'll pay.",
    },
    {
      icon: "spanner",
      title: "Leads that are already serious",
      description: "Customers pay a call-out fee before you even arrive. The tyre-kickers never make it through. Every site visit you make is to someone looking to get things done.",
    },
    {
      icon: "user-check",
      title: "Build a verified reputation online",
      description: "Every job you complete through Spanna builds your track record. Ratings, on-time scores, and honest pricing history will help prove to potental customers that you know how to run your business with excellence.",
    },
    {
      icon: "envelope-star",
      title: "Invoicing and records done for you",
      description: "Every job generates an invoice automatically. All your records and certificates are stored and exportable. Your bookkeeper will thank you.",
    },
  ],
};

function BenefitCard({ index = 0, icon, title, description }: Benefit) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 * (index + 1) }}
      viewport={{ amount: 0.4, once: true }}
      className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(10,79,255,0.09)]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-xl">
        <Icon icon={icon} width={24} fill="#000000" />
      </div>
      <div>
        <h3 className="mb-1.5 text-md font-bold tracking-[-0.2px] text-slate-900">{title}</h3>
        <p className="text-sm leading-6 text-slate-500">{description}</p>
      </div>
    </motion.div>
  );
}

const Benefits = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("homeowner");

  const currentBenefits = useMemo(() => benefits[activeTab], [activeTab]);

  return (
    <Section id="benefits" background="paper">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subheading="Why Spanna" heading="Built for both sides of the job" description="            We&apos;ve rethought every part of the process, from the first quote to the final payment, for homeowners and tradespeople alike." />

        <div className="mb-10 flex w-fit rounded-xl border border-slate-200 bg-paper p-1.5">
          {(["homeowner", "pro"] as TabKey[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-5 py-2.5 text-sm font-bold transition cursor-pointer ${activeTab === tab ? "bg-blue text-white" : "text-slate-500"
                }`}
            >
              {tab === "homeowner" ? "For homeowners" : "For tradespeople"}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {currentBenefits.map((benefit, index) => (
            <BenefitCard key={`${benefit.title}-${index}`} index={index} {...benefit} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits;