import { PropsWithChildren } from "react";
import { GridContainer } from "./styles";
import { IntRange } from "../../../../interfaces/types/intRange.types";

// Todo:
// [X] - Columns
// [X] - Row Gap
// [XS] - Column Gap

interface IContainerProps {
  columns?: IntRange<1, 13>;
}

const Container = ({
  children,
  columns,
}: PropsWithChildren<IContainerProps>) => {
  return <GridContainer columns={columns}>{children}</GridContainer>;
};

export default Container;

/* 
<Grid.Container>
    <Grid.Item></Grid.Item>
    <Grid.Item></Grid.Item>
    <Grid.Item></Grid.Item>
    <Grid.Item></Grid.Item>
</Grid.Container>

<div className="grid" cols gap >
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div> 
*/
