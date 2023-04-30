import React, { memo } from "react";

const Navbar = ({ data, dataCall }) => {
  console.log("render Navbar");
  return (
    <div>
      <h1>Navbar Component</h1>
      <p>useMemo: {data.name}</p>
      <p>useCallback: {dataCall().name}</p>
    </div>
  );
};

export default memo(Navbar);
