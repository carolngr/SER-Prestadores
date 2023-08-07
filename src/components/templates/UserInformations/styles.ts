import styled from "styled-components";

interface IHeaderProps{
  background?: string;
}

export const Container = styled.div`
  border-radius: 5px;
  background: #fff;
`;

export const Header = styled.div<IHeaderProps>`
  padding: 20px;
  border-radius: 5px 5px 0 0;
  height: 100px;
  position: relative;

  background: ${({ background }) => background ?? "#d9d9d9"} ;
`;

export const Profile = styled.img`
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 100px;
  background: #d9d9d9;
  border: 2px solid #fff;
  left: 20px;
  bottom: -50px;
`;

export const CardInfos = styled.div`
  padding: 20px;
  margin-top: 50px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Name = styled.span`

  font-size: 1rem;
`;

export const Detail = styled.span`

  font-size: 0.8rem;
  color: #445566;
`;

export const Bio = styled.span`
  font-weight: 600;
  font-size: 0.8rem;
`;

export const Divider = styled.div`
  margin: 10px 0;
  height: 2px;
  background: #f1f1f1;
`;