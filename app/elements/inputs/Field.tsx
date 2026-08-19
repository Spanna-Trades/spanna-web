interface FieldProps extends React.HTMLProps<HTMLInputElement> {
  wrapperClasses?: string
  errorMessage?: string
}

const Field = ({
  label,
  type = "text",
  placeholder,
  wrapperClasses,
  errorMessage,
  ...props
}: FieldProps) => (
  <div className={wrapperClasses}>
    <label htmlFor={props.id} className="ml-3.5 mb-1 text-xs font-bold uppercase text-grey">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className={`leading-6 w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-md text-ink outline-none transition focus:border-blue ${errorMessage && 'border-red-400 focus:border-red-400'}`}
      {...props}
    />
    {errorMessage && <p className="inline text-red-400 text-xs">{errorMessage}</p>}
  </div>
);

export default Field;