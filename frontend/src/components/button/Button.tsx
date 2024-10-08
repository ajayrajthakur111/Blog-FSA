import React from "react";
import '../../styles/Button.scss'
interface ButtonProps {
  label: string;
  type?: "submit" | "button";
backgroundColor?:string
}

const Button: React.FC<ButtonProps> = ({ label, type = "submit", backgroundColor}) => {
  return (
    <button className="button" type={type} style={{backgroundColor:`${backgroundColor}`}} >
      {label}
    </button>
  );
};

export default Button;
