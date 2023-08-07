import React from "react";
import { Container } from "./styles";
import { Icon } from "@components/atoms/Icon";

const sizes = {
  sm: ".7rem",
  md: ".85rem",
  lg: "1.3rem",
};

interface IIconButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  icon: string;
}

const IconButton = ({ icon, color, onClick, size }: IIconButtonProps) => {
  return (
    <Container onClick={onClick}>
      <Icon name={icon} size={size} color={color} />
    </Container>
  );
};

export default IconButton;
