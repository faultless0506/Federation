// import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./ButtonToAll.scss";
interface ButtonToAllProps {
    link: string,
    text: string
}
export default function ButtonToAll({link, text}: ButtonToAllProps) {
    const location = useLocation();
    const isActive = location.pathname === link;
    
  return (
    <button className={`button-toall ${isActive ? 'active' : ''}`}><Link to={link}>{text}</Link></button>
  )
}
