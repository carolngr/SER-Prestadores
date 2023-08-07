import { IExtractorObject, ITableProps } from "./defaultSettings";
import Header from "./Header";
import { Container, ContainerTable } from "./styles";
import Pagination from "../Pagination";
import { Body } from "./Body";

export const Table = <T extends IExtractorObject>({
  columns,
  rows,
  rowsProps,
}: ITableProps<T>) => {
  return (
    <>
      <Container>
        <ContainerTable>
          <Header columns={columns} />
          <Body columns={columns} rows={rows} rowsProps={rowsProps} />
        </ContainerTable>
      </Container>
      {rowsProps.total! > 0 && <Pagination total={rowsProps.total} />}
    </>
  );
};