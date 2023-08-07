import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  width: 100vw;
  box-sizing: border-box;
  padding: 30px 10%;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    max-height: 60px;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;

  ul {
    display: flex;
    gap: 1rem;
  }
`;

interface IItemMenuProps {
  $isActive?: boolean;
}

export const ItemMenu = styled.li<IItemMenuProps>`
  list-style: none;

  ${({ $isActive }) => `
    color: ${$isActive ? "#f00" : "#333"};
    font-weight: ${$isActive ? "bold" : "500"}
  `};
`;
