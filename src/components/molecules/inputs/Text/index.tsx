import React, { useMemo } from "react";
import { FormControl, ContainerInput, Button, Container } from "./styles";
import { Label } from "../../../atoms/Label";
import { IDefaultSettings } from "../defaultSettings";
import { Error } from "@/components/atoms/Error";


interface ITextProps extends IDefaultSettings {
  label?: string;
  placeholder?: string;
  type?: "text" | "email";
  isRequired?: boolean;
}

export const Text = ({
  label,
  placeholder,
  type,
  isRequired,
  form,
  name
}: ITextProps): React.ReactElement => {
const fieldState = form.getFieldState(name)
const error = useMemo(() => {
  return fieldState.error
},[form.formState])


  return (
    <Container>
      <Label text={label} isRequired={isRequired}/>
      <FormControl>
        <ContainerInput
          type={type} 
          placeholder={placeholder} 
          {...form.register(name)} 
          onChange={(event) => {
            form.register(name).onChange(event);
            form.clearErrors(name);
          }}
        />
      </FormControl>
      <Error message={error?.message} />
    </Container>
  );
};