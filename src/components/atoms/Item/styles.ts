import styled from "styled-components";
import { IntRange } from "../../../interfaces/types/intRange.types";

export type TAlignItems = "center" | "stretch" | "start" | "end";

export interface IContainerItemsProps {
  alignItems?: TAlignItems;
  xs: IntRange<1, 13>;
  md: IntRange<1, 13>;
  sm: IntRange<1, 13>;
}

// para saber mais sobre o grid item
// acesse: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
export const ContainerItem = styled.div<IContainerItemsProps>`
  height: 100%;
  min-width: 0;
  align-items: ${({ alignItems }) => alignItems};
  grid-column-end: ${({ xs = 1 }) => `span ${xs}`};

  @media (min-width: 600px) {
    grid-column-end: ${({ sm = 1 }) => `span ${sm}`};
  }
  @media (min-width: 900px) {
    grid-column-end: ${({ md = 1 }) => `span ${md}`};
  }
`;
