import React from 'react'
import { ProjectsData } from './Assets/ProjectsData'
import { Container, Row } from 'react-bootstrap'
import './Projects.css'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <div className='Projects-wrapper py-5' style={{minHeight:"80vh"}}>
      <h1 className='text-center my-5'>Our Projects</h1>
      <Container>
      <Row className='d-flex justify-content-evenly mt-3' style={{width:"100%"}}>
      
      {
        ProjectsData.map((project, i) =>{
          return ( <ProjectCard project={project} key={i}/>)
        })
      }
     
     </Row>
     </Container>
    </div>
  )
}

export default Projects