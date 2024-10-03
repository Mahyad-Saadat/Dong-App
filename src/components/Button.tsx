import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  type: "submit" | "reset" | "button";
  className?: string;
}

const Button = ({ children, onClick, type, className }: Props) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
