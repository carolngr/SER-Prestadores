
import React, { useMemo } from "react";
import { IDefaultSettings } from "../defaultSettings";
import { ContainerInput, FormControl, Container } from "./styles";
import { Label } from "@/components/atoms/Label";
import { Error } from "@/components/atoms/Error";


interface IColorProps extends IDefaultSettings {
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export const Color  = ({
  label,
  placeholder,
  isRequired,
  form,
  name
}: IColorProps): React.ReactElement => {

  const { error } = useMemo(() => {
    return form.getFieldState(name);
  }, [form.formState]);

  function onChange(){
    form.clearErrors(name)
  }

  return (
    <Container>
      <Label text={label} isRequired={isRequired} />
      <FormControl>
        <ContainerInput type="color" placeholder={placeholder} {...form.register(name)} 
          onChange={(event) => {
          form.register(name).onChange(event);
          form.clearErrors(name);
        }} />
      </FormControl>
      <Error message={error?.message} />
    </Container>
  );
};
