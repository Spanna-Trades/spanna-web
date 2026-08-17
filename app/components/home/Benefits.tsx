"use client";

import Section from "@/app/elements/layout/Section";
import SectionHeader from "@/app/elements/layout/SectionHeading";
import { useMemo, useState } from "react";

type TabKey = "homeowner" | "pro";

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

const benefits: Record<TabKey, Benefit[]> = {
  homeowner: [
    {
      icon: "⚡",
      title: "Three quotes in minutes, not days",
      description: "Need three quotes before you can proceed? We get it. Submit one job request and compare multiple verified pros instantly, no phone calls, no waiting, no chasing.",
    },
    {
      icon: "🔒",
      title: "Your money is protected until you're happy",
      description: "We hold every rand until you approve the work. Seven days to flag a problem. Your pro doesn't get paid until you say so.",
    },
    {
      icon: "📋",
      title: "The final price is locked before work starts",
      description: "No more mid-job price blowouts. Once your pro sets the final price, it cannot change. Not by them, not by anyone.",
    },
    {
      icon: "✅",
      title: "Every pro is verified before they quote",
      description: "CIPC registration, trade certifications, public liability insurance, ID verification. We check all of it, so you don't have to.",
    },
    {
      icon: "⭐",
      title: "Real reviews from real customers",
      description: "Every rating on Spanna comes from a verified, completed job. No fake reviews, no anonymous opinions. Just honest feedback from people who've actually used the pro.",
    },
    {
      icon: "📊",
      title: "See their track record before you choose",
      description: "How often do they show up on time? Does their final price match their rough quote? Real data, from real jobs, right there when you compare.",
    },
    {
      icon: "💬",
      title: "Something goes wrong? We sort it",
      description: "Raise a problem within 7 days and both sides get heard. We review the evidence and make a call, in writing, within 3 days.",
    },
    {
      icon: "💸",
      title: "Refer a friend, both of you save",
      description: "When someone you refer completes their first job, you each get R50 in credit against your next Spanna fee.",
    },
  ],
  pro: [
    {
      icon: "💰",
      title: "Your money is guaranteed before you lift a tool",
      description: "We hold the full job amount before work begins. No more chasing invoices. No more trusting a stranger's word that they'll pay.",
    },
    {
      icon: "📉",
      title: "Lower fees than anywhere else",
      description: "Other platforms charge up to 20% of your labour or R30 per lead with no guarantee of a booking. Spanna charges a flat 2.5% only on completed jobs. You keep more of what you earn.",
    },
    {
      icon: "🎯",
      title: "Leads that are already serious",
      description: "Customers pay a call-out fee before you even arrive. The tyre-kickers never make it through. Every site visit you make is a qualified opportunity.",
    },
    {
      icon: "⭐",
      title: "Build a verified reputation online",
      description: "Every job you complete through Spanna builds your track record. Ratings, on-time scores, and honest pricing history, all verified and publicly visible.",
    },
    {
      icon: "📄",
      title: "Invoicing and records done for you",
      description: "Every job generates an invoice automatically. All your records and certificates are stored and exportable. Your bookkeeper will thank you.",
    },
    {
      icon: "🚀",
      title: "Join early, get ahead",
      description: "The pros who build their Spanna track record first will be the ones customers see first. There's no better time to sign up than before the platform goes live.",
    },
  ],
};

function BenefitCard({ icon, title, description }: Benefit) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(10,79,255,0.09)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-xl">
        {icon}
      </div>
      <div>
        <h3 className="mb-1.5 text-[15.5px] font-bold tracking-[-0.2px] text-slate-900">{title}</h3>
        <p className="text-[13px] leading-6 text-slate-500">{description}</p>
      </div>
    </div>
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
              className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${activeTab === tab ? "bg-blue text-white" : "text-slate-500"
                }`}
            >
              {tab === "homeowner" ? "For homeowners" : "For tradespeople"}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {currentBenefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits;