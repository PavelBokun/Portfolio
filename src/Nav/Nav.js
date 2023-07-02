import React from "react"
import s from "./Nav.module.css";


export const Nav = () => {
  return (
    
        <div className={s.itemsMenuAll}>
      <div>
        <a className={s.itemsMenu} href="">Главная</a>
      </div>
      <div>
        <a className={s.itemsMenu} href=""> Скилы</a>
      </div>
      <div>
        <a  className={s.itemsMenu} href="">Работы</a>
      </div>
      <div>
        <a className={s.itemsMenu} href="">Контакты</a>
      </div>
        </div>
    
  );
};
