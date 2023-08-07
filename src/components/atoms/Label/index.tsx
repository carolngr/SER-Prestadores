import React from 'react';
import { ContairLabel } from './styles';

interface ILabelProps {
  text?: string;
  isRequired?: boolean;

}

export const Label = ({isRequired, text }: ILabelProps ) => {
  return (<ContairLabel> {text}{isRequired && <strong>*</strong>}</ContairLabel>);
}