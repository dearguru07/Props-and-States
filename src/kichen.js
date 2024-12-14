import React from "react";
import Mom from "./mom";
import { useRef } from "react";

const Kichen = () => {
  const name=useRef()
  const mail=useRef()
  const password=useRef()
  function Click(){
    console.log(name.current.value)
    console.log(mail.current.value)
    console.log(password.current.value)
  }
  return <div>
    {/* <Mom/> */}
    <input type="text" placeholder="Enter a usename" ref={name}></input>
    <input type="email" placeholder="Enter a Email" ref={mail}></input>
    <input type="password" placeholder="Enter a password" ref={password}></input>
    <button onClick={Click}>Sing-in</button>
  </div>;
};
export default Kichen;
