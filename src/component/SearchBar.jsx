import FormInput from "./FormInput";

export default function SearchBar({
  type,
  className,
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <div className="mb-3">
      <FormInput
        type={type}
        className={className}
        value={value}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
      />
    </div>
  );
}
