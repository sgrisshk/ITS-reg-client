import type { ComponentPropsWithoutRef } from "react";

export default interface InputGroupProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  large?: boolean;   
  textfield?: boolean; 
} 