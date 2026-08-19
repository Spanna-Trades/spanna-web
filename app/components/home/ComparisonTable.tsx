import Section from "@/app/elements/layout/Section";

const ComparisonTable = () => (
  <Section background="grainent">
    <div className="max-w-7xl mx-auto relative">
      <div className="mx-auto max-w-5xl rounded-2xl bg-deep-blue p-6 text-white sm:p-8 lg:p-10 shadow-lg">
        <div className="mb-4 text-[11px] font-extrabold uppercase tracking-[2px] text-[#8fb4ff]">
          How we stack up
        </div>
        <h2 className="mb-2 text-3xl font-bold tracking-[-0.8px] text-white sm:text-4xl lg:text-[44px]">
          The numbers don&apos;t lie
        </h2>
        <p className="mb-8 max-w-140 text-[15px] leading-6 text-[#8fb4ff]">
          We looked at what tradespeople currently pay to find work. Then we built something that actually works in their favour.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-180 w-full border-separate border-spacing-0 text-left">
            <thead>
              <tr>
                <th className="pb-4 pr-4 text-[11px] font-extrabold uppercase tracking-[1.4px] text-[#8fb4ff]">
                  What you get
                </th>
                <th className="pb-4 px-4 text-center text-[11px] font-extrabold uppercase tracking-[1.4px] text-[#8fb4ff]">
                  Platform A
                </th>
                <th className="pb-4 px-4 text-center text-[11px] font-extrabold uppercase tracking-[1.4px] text-[#8fb4ff]">
                  Platform B
                </th>
                <th className="pb-4 pl-4 text-center text-[11px] font-extrabold uppercase tracking-[1.4px] text-[#8fb4ff]">
                  Spanna <span className="inline-block rounded-full bg-green px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.8px] text-white">best</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Upfront cost to join", "Free", "Free", "Free"],
                ["Cost per lead or commission", "R30 per lead", "Up to 20% of labour", "2.5% on completion only"],
                ["Payment guaranteed before you start", "✕", "✕", "✓"],
                ["Final price locked before work begins", "✕", "✕", "✓"],
                ["Cover fund for disputes and damage", "✕", "✕", "✓"],
                ["Auto invoicing and job records", "✕", "✕", "✓"],
                ["Verified public reputation score", "✕", "✓", "✓"],
              ].map(([feature, a, b, s]) => (
                <tr key={feature} className="border-t border-white/10 hover:bg-white/5">
                  <td className="border-t border-white/10 px-0 py-4 pr-4 text-[14px] text-white/80">{feature}</td>
                  <td className="border-t border-white/10 px-4 py-4 text-center text-[14px] text-white/80">
                    {a === "✓" || a === "✕" ? <span className={a === "✓" ? "text-[#6ee7a8]" : "text-[#f87171]"}>{a}</span> : a}
                  </td>
                  <td className="border-t border-white/10 px-4 py-4 text-center text-[14px] text-white/80">
                    {b === "✓" || b === "✕" ? <span className={b === "✓" ? "text-[#6ee7a8]" : "text-[#f87171]"}>{b}</span> : b}
                  </td>
                  <td className="border-t border-white/10 px-4 py-4 text-center text-[14px] text-white/80">
                    {s === "✓" || s === "✕" ? <span className={s === "✓" ? "text-[#6ee7a8]" : "text-[#f87171]"}>{s}</span> : <b className="text-[#6ee7a8]">{s}</b>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-[12px] leading-6 text-[#8fb4ff]/70">
          Competitor data sourced from publicly available platform documentation. Spanna pricing is indicative and subject to final confirmation before launch.
        </p>
      </div>
    </div>
  </Section>
)

export default ComparisonTable;