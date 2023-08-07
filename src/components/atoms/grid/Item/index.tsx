import { PropsWithChildren } from "react";
import { ContainerItem } from "./styles";

interface IItemProps {
  column?: number;
}

const Item = (props: PropsWithChildren<IItemProps>) => {
  return <ContainerItem column={props.column}>{props.children}</ContainerItem>;
};

export default Item;
