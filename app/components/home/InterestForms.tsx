"use client";

import Field from "@/app/elements/inputs/Field";
import Select from "@/app/elements/inputs/Select";
import Section from "@/app/elements/layout/Section";
import SectionHeader from "@/app/elements/layout/SectionHeading";
import { useState } from "react";

const InterestForms = () => {
  const [submittedHomeowner, setSubmittedHomeowner] = useState(false);
  const [submittedPro, setSubmittedPro] = useState(false);
  return (
    <Section id="interest" background="paper">
      <div className="mx-auto max-w-7xl">
        <SectionHeader subheading="Stay in the loop" heading="Be first when we go live" description="            We&apos;re building in Gauteng right now. Tell us who you are and we&apos;ll keep you posted on everything that matters." />

        <div className="grid gap-7 lg:grid-cols-2">
          <div id="homeowner-card" className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
            <h3 className="mb-2 text-[22px] font-bold tracking-[-0.5px] text-slate-900">I&apos;m a homeowner</h3>
            <p className="mb-5 text-[13.5px] leading-6 text-slate-500">
              Drop your email and we&apos;ll let you know the moment Spanna goes live in your area. No spam, no noise. Just the things that matter to you.
            </p>

            <div className="space-y-4">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@example.com" />
              <Field label="Area (optional)" placeholder="e.g. Sandton, Midrand, Centurion" />
            </div>

            <button
              type="button"
              onClick={() => setSubmittedHomeowner(true)}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-blue px-6 py-3.5 text-[15px] font-bold text-white transition hover:opacity-90"
            >
              Keep me posted
            </button>

            {submittedHomeowner && (
              <div className="mt-4 rounded-xl border border-[#c3e8d2] bg-green-soft p-4 text-[13.5px] font-semibold leading-6 text-green">
                <b>You&apos;re on the list.</b> We&apos;ll reach out the moment Spanna goes live in your area. Thanks for being part of this from the start.
              </div>
            )}
          </div>

          <div id="pro-card" className="rounded-2xl border border-blue bg-blue-soft p-7 sm:p-8">
            <h3 className="mb-2 text-[22px] font-bold tracking-[-0.5px] text-slate-900">I&apos;m a tradesperson</h3>
            <p className="mb-5 text-[13.5px] leading-6 text-slate-500">
              Sign up and be among the first pros on the platform. We&apos;re building this for you — and we want to hear what you actually need.
            </p>

            <a
              href="#how-it-works"
              className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue px-6 py-3.5 text-[15px] font-bold text-white transition hover:opacity-90"
            >
              See how Spanna works →
            </a>

            {!submittedPro && (
              <div className="mb-5 flex gap-3 rounded-2xl bg-[linear-gradient(135deg,#04143f_0%,#1a3a8f_100%)] p-4 text-white">
                <div className="text-2xl">🎁</div>
                <div>
                  <div className="mb-1 text-[14px] font-bold">Exclusive sign-up bonus</div>
                  <div className="text-[12.5px] leading-5 text-[#8fb4ff]">
                    Sign up and get something special from us. Help us build what you actually want — and be first in line when we go live.
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@example.com" />
              <Select label="Trade" options={["Electrician", "Plumber", "Both"]} />
              <Select label="Years in the trade" options={["Less than 2 years", "2–5 years", "5–10 years", "More than 10 years"]} />
            </div>

            <button
              type="button"
              onClick={() => setSubmittedPro(true)}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-blue px-6 py-3.5 text-[15px] font-bold text-white transition hover:opacity-90"
            >
              Count me in
            </button>

            {submittedPro && (
              <div className="mt-4 rounded-xl border border-[#c3e8d2] bg-green-soft p-4 text-[13.5px] font-semibold leading-6 text-green">
                <b>Welcome to Spanna.</b> We&apos;ve sent you an email with your exclusive sign-up bonus — check your inbox. We read every bit of feedback we get, and yours will shape what this platform looks like when it launches.
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default InterestForms;