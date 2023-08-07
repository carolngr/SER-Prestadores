import React from 'react';
import { IColumnsProps, IExtractorObject, ITableProps } from '../defaultSettings';
import { ContainerHeader, ContainerRow } from './styles';

interface IHeaderProps<T extends IExtractorObject>
  extends Pick<ITableProps<T>, "columns"> {}

const Header  = <T extends IExtractorObject>({ columns }: IHeaderProps<T>) => {
  return (
    <ContainerHeader>
      {columns.map((column) => (
        <ContainerRow key={String(column.key)}>{column.label}</ContainerRow>
      ))}
    </ContainerHeader>
  )
}

export default Header;