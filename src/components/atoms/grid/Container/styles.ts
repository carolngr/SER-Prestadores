import styled from "styled-components";
import { IntRange } from "../../../../interfaces/types/intRange.types";

interface IGridContainerProps {
  columns?: IntRange<1, 13>;
}

export const GridContainer = styled.div<IGridContainerProps>`
  ${({ columns }) => `
        display: grid;
        grid-template-columns: repeat(${columns ?? 12}, 1fr);
        row-gap: 15px;
        column-gap: 15px;
    `}
`;

// <Grid.Container columns={10}>
//     <Grid.Item columns={2}>Button</Grid.Item>
//     <Grid.Item columns={8}>Input</Grid.Item>
// </Grid.Container>

// <Grid.Container columns={10}>
//     <Grid.Item >Button</Grid.Item>
//     <Grid.Item columns={8}>Input</Grid.Item>
// </Grid.Container>
