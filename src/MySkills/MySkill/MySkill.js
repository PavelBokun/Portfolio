import React from "react";
import s from "./MySkill.module.css";

 const MySkill = () => {
  return (
    <>
    <div className={s.skillBlock}>
      <div className={s.mySkill}>React</div>
      <div>Подробное описание навыка</div>
    </div>
    <div className={s.skillBlock}>
    <div className={s.mySkill}>React</div>
    <div>Подробное описание навыка</div>
  </div>
  <div className={s.skillBlock}>
  <div className={s.mySkill}>React</div>
  <div>Подробное описание навыка</div>
</div>
    </>
    
  );
};
export default MySkill;