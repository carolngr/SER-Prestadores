import React from "react";
import {
  Bio,
  CardInfos,
  Container,
  Detail,
  Divider,
  Header,
  Name,
  Profile,
  Row,
} from "./styles";

interface IUserInformationsProps{
  data:{
    name: string;
    email: string;
    phone: string;
    picture?: string;
    bio: string;
    background?: string;
    onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
}

const UserInformations = ({ data }: IUserInformationsProps) => {
  return (
    <Container>
      <Header
        background={data.background}
      >
        <Profile src={data.picture} alt={data.name} />
      </Header>
      <CardInfos>
        <Row>
          <Name>{data.name}</Name>
          <Detail>{data.email}</Detail>
        </Row>
        <Detail>{data.phone}</Detail>
        <Divider />
        <Bio>Bio: </Bio>
        <Detail>
          {data.bio}
        </Detail>
      </CardInfos>
    </Container>
  );
};

export default UserInformations;