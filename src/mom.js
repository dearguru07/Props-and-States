import React from "react";
import { DevilveryBoy } from ".";
import { useContext } from "react";

const Mom = () => {
    const data=useContext(DevilveryBoy)
  return <div>
        <h3>Heloo every one........{data}</h3>
  </div>;
};
export default Mom;