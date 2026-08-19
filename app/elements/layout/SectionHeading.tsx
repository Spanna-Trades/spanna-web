interface SectaionHeaderProps {
  subheading?: string
  heading: string
  description?: string
}

const SectionHeader = ({ subheading, heading, description }: SectaionHeaderProps) => (
  <div className="mb-12">
    {subheading && <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2px] text-blue">
      {subheading}
    </p>}
    <h2 className="mb-4 text-3xl font-bold tracking-[-0.8px] text-slate-900 sm:text-4xl lg:text-[44px]">
      {heading}
    </h2>
    {description &&
      <p className="max-w-140 text-base leading-7 text-slate-500 sm:text-lg">
        {description}
      </p>
    }
  </div>

)

export default SectionHeader;