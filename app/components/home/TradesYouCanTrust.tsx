import Button from "@/app/elements/inputs/Button";
import Section from "@/app/elements/layout/Section";

const TradesYouCanTrust = () => (
  <Section background="paper" extendedClasses="relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <span className="mb-6 inline-block rounded-full border border-blue-line bg-blue-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[2px] text-blue">
          Launching in Gauteng soon
        </span>
        <h1 className="mb-5 text-[clamp(38px,5vw,62px)] font-bold leading-[1.07] tracking-[-1.5px] text-slate-900">
          Trades you
          <br />
          can <span className="text-blue">trust.</span>
        </h1>
        <p className="mb-9 max-w-120 text-base leading-7 text-slate-500 sm:text-[18px]">
          Spanna connects homeowners with verified electricians and plumbers. You see the price before work starts. Your money moves only when the job is done. That&apos;s it.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button href="#interest">I&apos;m a homeowner →</Button>
          <Button href="#how-it-works" variant="secondary">
            See how it works →
          </Button>
        </div>
      </div>

      <div className="rounded-2xl bg-deep-blue p-6 text-white shadow-[0_24px_64px_rgba(10,79,255,0.18)] sm:p-8">
        <div className="mb-7 text-[11px] font-extrabold uppercase tracking-[1.8px] text-[#8fb4ff]">
          How your money moves
        </div>

        <div className="space-y-0">
          {[
            {
              dotType: "done",
              label: "Step 1",
              title: "You book the job and approve the quote",
              body: "Pick a verified pro, agree on the price after they've seen the job in person. Nothing moves until you say go.",
              icon: "✓",
            },
            {
              dotType: "active",
              label: "Step 2",
              title: "Money moves into Spanna's account until the work is done",
              body: "Your pro knows the money is real and waiting. You know the job has to be done right before anyone gets paid.",
              tag: "Builds trust on both sides of the job",
              icon: "S",
            },
            {
              dotType: "default",
              label: "Step 3",
              title: "Confirm the job is done. Spanna pays your pro.",
              body: "Seven days to flag anything. No problem? Your pro gets paid automatically. Simple as that.",
              icon: "🔧",
            },
          ].map((item, index, array) => (
            <div key={item.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg font-extrabold ${item.dotType === "done"
                    ? "border-green bg-green text-white"
                    : item.dotType === "active"
                      ? "border-blue bg-blue text-white shadow-[0_0_0_4px_rgba(10,79,255,0.3)]"
                      : "border-white/15 bg-white/10 text-white"
                    }`}
                >
                  {item.icon}
                </div>
                {index < array.length - 1 && (
                  <div className="relative my-1 h-9 w-0.5 overflow-hidden bg-white/10">
                    <div className="absolute left-0 -top-full h-full w-full bg-[linear-gradient(180deg,transparent_0%,#4d9fff_40%,#6ee7a8_100%)] animate-[flow-down_1.8s_infinite_linear]" />
                  </div>
                )}
              </div>

              <div className="flex-1 pb-6">
                <div className="mb-1.5 text-[10.5px] font-extrabold uppercase tracking-[1.2px] text-[#8fb4ff]">
                  {item.label}
                </div>
                <div className="mb-1.5 text-[15.5px] font-bold leading-[1.3] text-white">
                  {item.title}
                </div>
                <div className="text-[12.5px] leading-6 text-[#8fb4ff]">{item.body}</div>
                {item.tag && (
                  <span className="mt-2 inline-block rounded-lg border border-[#6ee7a8]/25 bg-[#6ee7a8]/10 px-2.5 py-1.5 text-[11px] font-semibold text-[#6ee7a8]">
                    {item.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="my-4 border-t border-white/10" />

        <div className="rounded-[10px] border border-white/10 bg-white/5 p-3 text-[12px] leading-6 text-[#c8dcff]">
          <span className="font-bold text-[#6ee7a8]">✓</span> Every rand is accounted for before work starts. No hidden fees. No surprises at the end.
          <br />
          <br />
          <span className="text-[#8fb4ff]">&quot;Trades you can trust.&quot;</span>
        </div>
      </div>
    </div>
  </Section>
)

export default TradesYouCanTrust;