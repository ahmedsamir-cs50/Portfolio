import React from 'react'
import { Col } from 'react-bootstrap'

const SkillCard = ({skill}) => {
  return (
    <Col lg={3} md ={4} sm={12} className='SKILL-CARD'>
        <div>
<div  className="d-flex justify-content-center" ><img src={skill.img} alt=''></img></div>
<h2 className='text-center my-2'>{skill.title}</h2>
<p>{skill.text}</p>
        </div>
    </Col>
  )
}

export default SkillCard