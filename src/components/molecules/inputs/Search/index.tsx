import React, { useMemo } from "react";
import { FormControl, ContainerInput, Button } from "./styles";
import { Icon } from "@components/atoms/Icon";
import { IDefaultSettings } from "../defaultSettings";

interface ISearchProps extends IDefaultSettings {
  label?: string;
  placeholder?: string;
  type?: "Search" | "email";
  handleClick?: (text: string) => void;
}


export const Search = ({
  label,
  placeholder,
  type,
  form,
  name,
  handleClick
}: ISearchProps): React.ReactElement => {

  const value = form.watch(name);

  const { error } = useMemo(() => {
    return form.getFieldState(name);
  }, [form.formState]);
  
  return (
    <div>
      <label>{label}</label>

      <FormControl>
        {/* Input */}
        <ContainerInput type={type} placeholder={placeholder} {...form.register(name)} />

        {/* Button de search */}
        <Button onClick={() => handleClick?.(value)}>
          <Icon name="search" color="#fff" />
        </Button>
      </FormControl>
    </div>
  );
};
