import type { ReactNode } from "react";

interface ButtonProps {
  id: string;
  className?: string;
  children: ReactNode;
}

function Button({ id, className, children }: ButtonProps) {
  const buttonId: string = id ? `button-${id}` : "button";
  className = className
    ? `p-button font-extrabold rounded-lg ${className}`
    : "p-button font-extrabold rounded-lg";

  return (
    <button id={buttonId} className={className}>
      {children}
    </button>
  );
}

export default Button;
