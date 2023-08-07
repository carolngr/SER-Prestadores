import { Link as LinkDOM } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 5px;
`;

const linkStyle = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #6c6c6c;

  & + ::before {
    display: inline-block;
    padding: 0 0.5rem;
    color: #6c6c6c;
    content: "/";
  }
`;

export const Link = styled(LinkDOM)`
  ${linkStyle};
  :hover {
    color: #CE275C;
  }
`;

export const Item = styled.div`
  ${linkStyle};
`;
