import type { ChangeEvent } from "react";

interface InputProps {
  id: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ id, placeholder, onChange }: InputProps) {
  return (
    <input
      id={`input-${id}`}
      placeholder={placeholder}
      onChange={(event) => onChange(event)}
    />
  );
}

export default Input;
