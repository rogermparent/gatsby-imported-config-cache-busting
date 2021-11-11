import React from "react";

export default (props) => {
  console.log(props);
  const { children } = props;
  return <div>{children}</div>;
};
