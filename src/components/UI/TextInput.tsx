interface TextInputProps {
  id: string;
  placeholder?: string;
  label?: string;
  value: string;
  changeValue(value: string, key?: string): void;
}

function TextInput({
  id,
  placeholder,
  label,
  value,
  changeValue,
}: TextInputProps) {
  return (
    <div id={id}>
      {label && <label id={`label-${id}`} htmlFor={id}></label>}
      <input
        id={`input-${id}`}
        name={id}
        className="bg-[#f0f0f0] [#4D4D4D]"
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeValue(e.target.value, id)}
      />
    </div>
  );
}

export default TextInput;
