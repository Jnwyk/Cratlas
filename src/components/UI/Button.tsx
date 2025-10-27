import type { ReactNode } from "react";

interface ButtonProps {
  id: string;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  children: ReactNode;
}

function Button({ id, type, className, children }: ButtonProps) {
  const buttonId: string = id ? `button-${id}` : "button";
  className = className
    ? `p-button font-extrabold rounded-lg ${className}`
    : "p-button font-extrabold rounded-lg";

  return (
    <button id={buttonId} type={type} className={className}>
      {children}
    </button>
  );
}

export default Button;
