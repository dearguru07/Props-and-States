import React, { useState } from "react";
// import Kichen from "./kichen";
import { useCallback } from "react";

const Myset = new Set();

const Home = () => {
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [c, setc] = useState(0);
  const First = useCallback(() => {
    seta(a + 1);
  }, [a]);
  const Second = useCallback(() => {
    setb(b + 1);
  }, [b]);
  const Third = useCallback(() => {
    setc(c + 1);
  }, [c]);

  Myset.add(First);
  Myset.add(Second);
  Myset.add(Third);
  console.log(Myset);
  return (
    <div>
      {/* <Kichen /> */}

      <h4>{a}</h4>
      <h4>{b}</h4>
      <h4>{c}</h4>
      <button onClick={First}>Counter-1</button>
      <button onClick={Second}>Counter-2</button>
      <button onClick={Third}>Counter-3</button>
    </div>
  );
};
export default Home;
