export default function FormTextAreas({
  className,
  id,
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <div className="form-floating">
      <textarea
        className={className}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
