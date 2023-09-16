import React from 'react'
import { SkillsData } from './skillData'
import { Container, Row } from 'react-bootstrap'
import SkillCard from './SkillCard'
import './skills.css'
const Skills = () => {
  return (
    <div className='skills-wrapper py-5' style={{minHeight:"80vh"}}>
      <h1 className='text-center my-5'>Our Skills</h1>
      <Container>
      <Row className='d-flex justify-content-evenly mt-3'>
      
      {
        SkillsData.map((skill, i) =>{
          return ( <SkillCard skill={skill} key={i}/>)
        })
      }
     
     </Row>
     </Container>
    </div>
  )
}

export default Skills