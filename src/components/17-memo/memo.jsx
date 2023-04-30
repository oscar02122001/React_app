import React, { useState, useMemo, useCallback } from "react";
import Navbar from "./navbar";
const Memo = () => {
  const [count, setState] = useState(0);
  const data = useMemo(() => {
    return { name: "useMemo" };
  }, []);

  const dataCall = useCallback(() => {
    return { name: "CallBack" };
  }, []);

  const Plus = () => {
    setState(count + 1);
  };
  const Minus = () => {
    setState(count - 1);
  };

  console.log("render Memo");
  return (
    <div>
      <h1>Memo</h1>
      <h3>Count: {count}</h3>
      <button onClick={Plus}>+</button>
      <button onClick={Minus}>-</button>

      <Navbar data={data} dataCall={dataCall} />
    </div>
  );
};

export default Memo;
