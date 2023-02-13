import React from 'react'
import { Link } from 'react-router-dom'
import style from"./home.module.css"
export const HomeCrud = () => {
  return (
    <section id={style.nav}>
      
      <Link to="/cuser">Create-User</Link>
      <Link to="/">User</Link>            
    </section>
  )
}
export default HomeCrud