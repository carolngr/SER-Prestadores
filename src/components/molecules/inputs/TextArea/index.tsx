import React, { useMemo } from "react";
import { FormControl, ContainerInput, Button, Container } from "./styles";
import { Label } from "@components/atoms/Label";
import { IDefaultSettings } from "../defaultSettings";
import { Error } from "@components/atoms/Error";


interface ITextAreaProps extends IDefaultSettings {
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export const TextArea = ({
  label,
  placeholder,
  isRequired,
  form,
  name
}: ITextAreaProps): React.ReactElement => {

  const { error } = useMemo(() => {
    return form.getFieldState(name);
  }, [form.formState.errors]);

  return (
    <Container>
      <Label text={label} isRequired={isRequired} />
      <FormControl>
        <ContainerInput placeholder={placeholder} {...form.register(name)} />
      </FormControl>
      <Error message={error?.message} />
    </Container>
  
  );
};
