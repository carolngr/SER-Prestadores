import React, { useMemo } from "react";
import { Container, ContainerIcon, DropZone } from "./styles";
import { Icon } from "@components/atoms/Icon";
import { Label } from "@components/atoms/Label";
import { IDefaultSettings } from "../defaultSettings";
import { Error } from "@components/atoms/Error";

type TAllowedFiles = 'application/pdf' | "image/*" | '*' | ''

interface IFileProps extends IDefaultSettings{
  label?: string;
  isRequired?: boolean;
  acceptFiles?: TAllowedFiles,
  onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const File = ( 
  { 
    label,
    isRequired,
    form,
    name,
    acceptFiles,
    onFileChange
  }: IFileProps ) => {
  
  const file = form.watch(name) as FileList | undefined;
  
  const { error } = useMemo(() => {
    return form.getFieldState(name);
  }, [form.formState]);

  const spanMessage = file?.[0]?.name ?? "Selecione uma foto";
  
  return(
    <Container>
      <Label text={label} isRequired={isRequired} />
      
      <DropZone htmlFor="field-file">
        <ContainerIcon>
          <Icon name="image" size="lg" color="#366EC2"/>
        </ContainerIcon>
        <span>{spanMessage}</span>
      </ DropZone>
      <input id="field-file" type="file" accept={acceptFiles} {...form.register(name) } 
        onChange={
          (event) => { 
            form.register(name).onChange(event)
            if (!event.target.files?.[0]) return;
            onFileChange?.(event)
          }
        }
      />
      <Error message={error?.message} />
    </Container>

  );

};

export default File; 
