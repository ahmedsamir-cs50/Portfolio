import { fa3, faAddressBook, faEnvelope, faFaceDizzy, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import linkedin from '../../images/old/white-linked.png'
import github from '../../images/old/git-white.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='Footer ' id='Contact'>  
      <Container >
        <Row>
        <Col sm={6}>
            <h3>About</h3>
            <p className='p1'>The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in exceptional website design</p>
             </Col>
        <Col sm={6} >
        <h3>Contact</h3>
        <div className='phone d-flex flex-row justify-content-start'>
        <FontAwesomeIcon  className='mx-2 mt-1' icon={faPhone}></FontAwesomeIcon>
            <p >01091951555</p>
        </div>
        <div className='d-flex flex-row justify-content-start'>
            <span><FontAwesomeIcon className='mx-2' icon={faEnvelope}></FontAwesomeIcon></span>
            <p>C.eng.ahmedsamir@gmail.com</p>
        </div>
        <div className='d-flex flex-row justify-content-start'>
          
          <a href='https://www.linkedin.com/in/ahmed-samir-b6a48028b/' target='_blank'>
            <img src={linkedin}></img></a>
            <a href='https://github.com/ahmedsamir-cs50' target='_blank'>
            <img src={github}></img></a>
        </div>
        </Col>
       
        
        </Row> 
       
        </Container>
    </div>
  )
}
