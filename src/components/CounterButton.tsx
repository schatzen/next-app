"use client";

import { useState } from "react";

export const CounterButton = () => {
  console.log("hello from Client");

  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>
        숫자 증가 시키기
      </button>
    </>
  );
};
