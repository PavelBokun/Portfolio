import React from "react";
import s from "./MySkills.module.css";
import MySkill from "./MySkill/MySkill"
 const MySkills = () => {
  return (
    <div >
      <div className={s.mySkills}>My Skills</div>
      <div className={s.skillsBlock}>
      <MySkill />
      </div>
      
    </div>
  );
};
export default MySkills;