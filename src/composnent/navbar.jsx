import React, { useEffect } from "react"
import { FiUser } from "react-icons/fi";
import {MdClose} from "react-icons/md"
import {AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom"

function Navber() {
  useEffect(() => {
    var menu = document.querySelector(".menu")
  var menuBtn = document.querySelector(".menu-btn")
  var closeBtn = document.querySelector(".close-btn")

  menuBtn.addEventListener("click", () => {
    menu.classList.add("active")
  })

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active")
  })
  })
    return (
      <>
       <header>
        <Link to="/#" className="logo">logo</Link>
        <div className="navigation">
          <ul className="menu">
            <div className="close-btn"><MdClose /></div>
            <Customlink className="menu-item" to="/#">
              Home
            </Customlink>
            <Customlink className="menu-item" to="/shop">
            Shop
            </Customlink>
            <Customlink className="menu-item" to="/about">
            About Us
            </Customlink>
            <Customlink className="menu-item" to="/blog">
            Blog
            </Customlink>
            <Customlink className="menu-item" to="/contact">
            Contact
            </Customlink>
            <Customlink className="menu-item" to="/login">
            login<FiUser />
            </Customlink>
          </ul>
        </div>
        <div className="menu-btn"><AiOutlineMenu /></div>
       </header>
      </>
    )
  }

function Customlink({to,children, ...props}) {
  const path = window.location.pathname
  return(
    <>
    <li className={path === to ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
    </>
  )
}
  export default Navber