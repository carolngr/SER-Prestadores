import theme from "@/global/styles/theme";
import { TColorsKeys, TFontSizeKeys } from "@/interfaces/theme";
import styled from "styled-components";

interface IContainerProps {
  color?: TColorsKeys;
  background?: TColorsKeys;
  size?: TFontSizeKeys;
}

export const Container = styled.button<IContainerProps>`
  padding: 0.7em 2em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  gap: 10px;
  display: flex;
  justify-content: center;
  text-align: center;


  ${({ color, background, size, theme }) => `
        color: ${theme.colors[color ?? 'primaryContrast'] };
        background: ${theme.colors[background ?? 'primary']};
        font-size: ${theme.fontSize[size ?? "md"]};
    `}
`;
