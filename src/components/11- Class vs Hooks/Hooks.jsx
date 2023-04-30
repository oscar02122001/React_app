import React, { useState } from "react";

const Hooks = () => {
  const [data, setCount] = useState({ count: 0, title: "oscar" });
    console.log(data, setCount);
  return (
    <div>
      <h1>Hooks Component </h1>
      <h1>Count: {data.count}</h1>
      <button onClick={() => setCount({count:data.count + 1})}>+</button>
      <button onClick={() => setCount({count:data.count - 1})}>-</button>
    </div>
  );
};

export default Hooks;
