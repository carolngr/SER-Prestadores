import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  #field-file{
    display: none;
  }

`;

export const DropZone = styled.label`
  padding: .85rem 1em;
  border-radius: 5px;
  border: 1px dashed #333;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ContainerIcon = styled.div`
  padding: .5em;
  border-radius: 5px;
  background: #366EC22B;
  max-width: max-content;
  max-height: max-content;
  display: flex;
  place-items: center;
`;