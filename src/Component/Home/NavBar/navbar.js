import React, { useState } from "react";
import { Container, Nav, Navbar,  } from "react-bootstrap";
import './navbar.css'

export const Navbarlogin = () => {
  const [nav,setNav]=useState(false)
  const changeNav =()=>{
    if(window.scrollY >= 50){
       setNav(true)
    }else{
      setNav(false)
    }
  }
  window.addEventListener("scroll",changeNav)
  console.log(nav)

  return (
    <Navbar expand="lg" className={nav?"navActive":"bg-body-tertiary"}>
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="m-auto" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
                     </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
