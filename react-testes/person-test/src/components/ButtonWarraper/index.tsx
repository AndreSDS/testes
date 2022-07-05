import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonWrapperProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
}

export const ButtonWrapper = ({ title, ...props }: ButtonWrapperProps) => {
  return <button {...props}>{title}</button>;
};
