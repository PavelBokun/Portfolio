import React from "react";
import s from "./Skils.module.css";

export const Skils = () => {
  return (
    <div className={s.skilsBlock}>
      <h2 className={s.meMore}>Know Me More</h2>
      <div className={s.skill}>
        <div>
          <h2>
            Hi, I'm
            <span className={s.name}> Bokun Pavel</span>
          </h2>
        </div>
        <div>
          <span>тут укажу IT-INCUB</span>
          <span> Experiance</span>
        </div>
      </div>
      <div className={s.aboutMe}>
        <div>
          <p>Name:</p>
          <p>Bokun Pavel</p>
        </div>
        <div>
          <p>Email:</p>
          <p>pavel.snabteh@gmail.com</p>
        </div>
        <div>
          <p>Date of birth:</p>
          <p>17 January 1981</p>
        </div>
        <div>
          <p>From:</p>
          <p>Minsk Belarus.</p>
        </div>
      </div>
    </div>
  );
};
