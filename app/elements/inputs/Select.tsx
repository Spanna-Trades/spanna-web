const Select = ({
  label,
  options,
}: {
  label: string;
  options: string[];
}) => (
  <label className="block">
    <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.3px] text-slate-500">{label}</span>
    <select defaultValue="" className="w-full rounded-[10px] border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 outline-none transition focus:border-blue">
      <option value="" disabled>
        Select {label.toLowerCase()}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

export default Select;