import React from "react";
import Class from "./Class";
import Hooks from "./Hooks";

const Render = () => {
  return (
    <div style={{ display: "flex",justifyContent:'space-between'}}>
      <Class />
      <Hooks />
    </div>
  );
};
export default Render;
