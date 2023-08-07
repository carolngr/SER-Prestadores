import React from "react";
import { Container } from "./styles";
import { Icon } from "@components/atoms/Icon";
import theme from "@/global/styles/theme";
import { TColorsKeys, TFontSizeKeys } from "@/interfaces/theme";

interface IDefaultProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  color?: TColorsKeys;
  background?: TColorsKeys;
  size?: TFontSizeKeys;
  startIcons?: string;
  endIcon?: string;
  isLoading?: boolean;
}

const Default = (props: IDefaultProps) => {

  return (
    <Container
      color={props.color} 
      size={props.size} 
      background={props.background} 
      onClick={props.onClick}
    >

      {props.isLoading ? (
        <span>carregando ...</span>
      ) : (
        <>
          {props.startIcons && (
            <Icon name={props.startIcons} color={props.color} />
          )}
          {props.text}
          {props.endIcon && <Icon name={props.endIcon} color={props.color} />}
        </>
      )}
      
    </Container>
  );
};

export default Default;
