interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  label: string
  defaultOptionLabel: string
  options: string[]
  wrapperClasses?: string
  errorMessage?: string
}

const Select = ({
  label,
  defaultOptionLabel,
  options,
  wrapperClasses,
  errorMessage,
  ...props
}: SelectProps) => (
  <div className={wrapperClasses}>
    <label htmlFor={props.id} className="ml-3.5 mb-1 text-xs font-bold uppercase text-grey">{label}</label>
    <select id={props.id} defaultValue="" className={`leading-6 w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-md text-ink outline-none transition focus:border-blue ${errorMessage && 'border-red-400 focus:border-red-400'}`} {...props}>
      <option value="" disabled className="text-md">
        {defaultOptionLabel}
      </option>
      {options.map((option, index) => (
        <option key={`${option}-${index}`} value={option} className="text-md">
          {option}
        </option>
      ))}
    </select>
    {errorMessage && <p className="inline text-red-400 text-xs">{errorMessage}</p>}

  </div>
);

export default Select;