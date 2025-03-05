import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container footer__box" >
        <div><Link to="/federation">Уставные документы</Link></div>
        <div><Link to="/">Общероссийская Федерация</Link></div>
        <ul className="footer__contacts">
          <li><Link to="/contacts">VK</Link></li>
          <li><Link to="/">Telegram</Link></li>
          <li><Link to="/">Email</Link></li>
          {/* <li><Link to="/">Phone</Link></li> */}
        </ul>
      </div>
    </div>
  );
}
