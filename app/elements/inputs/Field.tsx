const Field = ({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) => (
  <label className="block">
    <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.3px] text-slate-500">{label}</span>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-[10px] border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 outline-none transition focus:border-blue"
    />
  </label>
);

export default Field;