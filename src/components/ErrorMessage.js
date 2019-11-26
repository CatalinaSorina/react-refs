import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div
      style={{ border: "0.1rem solid red", padding: "0.5rem", color: "red" }}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
