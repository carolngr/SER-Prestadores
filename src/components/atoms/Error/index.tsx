import React, { ReactElement } from "react";

interface IErrorProps {
  message?: string;
}

export const Error = ({ message }: IErrorProps): ReactElement => {
  return message ? (
    <div className="error">
      <span>{message}</span>
    </div>
  ) : (
    <></>
  );
};
