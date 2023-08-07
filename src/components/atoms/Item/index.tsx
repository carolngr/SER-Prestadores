import React, { PropsWithChildren } from "react";
import { ContainerItem, IContainerItemsProps } from "./styles";

interface IItemProps extends IContainerItemsProps {}

const Item = ({ children, ...rest }: PropsWithChildren<IItemProps>) => {
  return <ContainerItem {...rest}>{children}</ContainerItem>;
};

export default Item;
