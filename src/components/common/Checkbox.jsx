export const Checkbox = ({
  label,
  checked,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <label className={`flex items-center gap-2 cursor-pointer text-slate-600 select-none text-xs ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded border-slate-300 text-orange-600 accent-orange-600 focus:ring-orange-500 cursor-pointer"
        {...props}
      />
      {label && <span className="font-medium">{label}</span>}
    </label>
  );
};

export default Checkbox;
