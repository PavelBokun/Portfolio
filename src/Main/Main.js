import React from "react";
import s from "./Main.module.css";
import styleContainer from "../common/styles/Container.module.css"
// import { styleContainer } from '/common/styles/Container.module.css';
export const Main = () => {
  return (
    <div className={styleContainer.container}>
      <div className={s.hellow}>
        <h1>Hi, I'm a Bokun Pavel</h1>
        <h2> I'm front-end developer.</h2>
        <span>based in Minsk Belarus.</span>
      </div>
      <div className={s.foto}>
        <img src="B.P.jpg" alt="foto" />
      </div>
    </div>
  );
};
//./../common/styles/Container.module.css