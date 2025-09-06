export default function FormInput({
  id,
  value,
  onChange,
  placeholder,
  label,
  type,
  className,
}) {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={className}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
