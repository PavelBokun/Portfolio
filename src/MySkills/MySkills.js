import React from "react";
import s from "./MySkills.module.css";
import MySkill from "./MySkill/MySkill"
 const MySkills = () => {
  return (
    <div className={s.mySkillsAll}>
      <div className={s.mySkills}>My Skills</div>
      <div className={s.skillsBlock}>
      <MySkill  title={"JS"} description={"тут должно бвть описание"}/>
      <MySkill  title={"CSS"}description={"тут должно бвть описание"}/>
      <MySkill  title={"HTML"}description={"тут должно бвть описание"}/>
      <MySkill  title={"REACT"}description={"тут должно бвть описание"}/>
      <MySkill  title={"ANGULAR"}description={"тут должно бвть описание"}/>
      
      </div>
      
    </div>
  );
};
export default MySkills;