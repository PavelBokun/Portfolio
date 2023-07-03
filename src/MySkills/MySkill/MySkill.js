import React from "react";
import s from "./MySkill.module.css";

const MySkill = (props) => {
  return (
    <>
      <div className={s.skillBlock}>
        <div className={s.icon}></div>
        <div className={s.mySkilltitle}><h3>{props.title}</h3></div>
        <div><span className={s.description}>{props.description}</span></div>
      </div>
    </>
  );
};
export default MySkill;
