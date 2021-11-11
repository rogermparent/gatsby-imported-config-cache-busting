import React from "react";

export default (props) => {
  console.log(props);
  const { children } = props;
  return (
    <div style={{ border: "2px solid black", padding: "2rem" }}>{children}</div>
  );
};
