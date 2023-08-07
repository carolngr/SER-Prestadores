import styled from "styled-components";

export const FormControl = styled.div`
  border-radius: 5px;
  /* border: 1px solid #4a5568a3; */
  display: flex;

  ${({ theme }) => `
      border: 1px solid ${theme.colors.textDetail};
  `}
`;

export const ContainerInput = styled.input`
  padding: .7em 2em;
  /* font-size: .85rem; */
  flex: 1;
  /* color: #4a5568a3; */
  border: none;
  /* border-radius: 5px 0 0 5px; */

  ${({ theme: {radius, ...theme}}) => `
    color: ${theme.colors.textDetail};
    font-size: ${theme.fontSize.md};
    border-radius: ${radius.sm} 0 0 ${radius.sm};
  `}

`;

export const Button = styled.button`
  /* border: 1px solid #319795; */
  /* border-radius: 0 4px 4px 0; */
  /* background: #319795; */
  padding: .7em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => `
    border-radius: 0 ${theme.radius.sm} ${theme.radius.sm} 0;
    background: ${theme.colors.primary};
    border: 1px solid: ${theme.colors.primary}
  `}
`;
