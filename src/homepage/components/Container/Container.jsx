import React, { Children } from "react";
import styles from "./Container.css";

const Container = ({children}) => {
  return (
  <div className="container">{children}</div>
  );
};

export default Container;