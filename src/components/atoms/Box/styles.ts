import styled, { css } from "styled-components";

interface IBoxProps {
  marginTop?: string;
  marginBotton?: string;
  marginLeft?: string;
  marginRight?: string;
}

export const Container = styled.div<IBoxProps>`
  padding: 1rem;
  border-radius: 5px;
  background: #fff;

  ${({marginTop, marginBotton, marginLeft, marginRight }) => css`
    margin-top: ${marginTop};
    margin-bottom: ${marginBotton};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
  `}
`;