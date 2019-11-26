import React from "react";

const ErrorMessage = ({ message }) => {
  return <div style={{ borderColor: "red", color: "red" }}>{message}</div>;
};

export default ErrorMessage;
