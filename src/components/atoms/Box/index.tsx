import { PropsWithChildren } from "react";
import { Container } from "./styles";

// [] - marginTop?: string
// [] - marginBottom?: string
// [] - marginLeft?: string
// [] - marginRight?: string

interface IBoxProps{
  // ... types
  marginTop?: string;
  marginBotton?: string;
  marginLeft?: string;
  marginRight?: string;
}


const Box = (props: PropsWithChildren<IBoxProps>) => {
  return <Container 
            marginTop={props.marginTop} 
            marginBotton={props.marginBotton} 
            marginLeft={props.marginLeft}
            marginRight={props.marginRight}
          >
            {props.children}
          </Container>;
};

export default Box;
