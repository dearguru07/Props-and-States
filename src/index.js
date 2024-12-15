import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./home";
import Kichen from "./kichen";
import Card from "./props";

export const DevilveryBoy=React.createContext()

const App=()=>{
  const poweder='Chilli power'
  return (<div>
    {/* <DevilveryBoy.Provider value={poweder}>
      <Home/>
    </DevilveryBoy.Provider> */}
    <Card/>
  </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
