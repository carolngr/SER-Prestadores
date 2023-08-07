import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export interface IDefaultSettings{ 
  // <T extends FieldValues = FieldValues> {
  form: UseFormReturn<any>;
  name: string;
}
