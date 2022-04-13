import React from 'react'
import {Hamburger, Logo,MenuLink,Nav,Menu} from"./NavbarStyles"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Toprak>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={()=>setOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
      </Hamburger>
      <Menu osman={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>



    </Nav>
  )
}

export default Navbar