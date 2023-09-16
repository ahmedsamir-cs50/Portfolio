import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({project}) => {

  return (
 
    <Col lg={3} md ={4} sm={12} className='Project-CARD' >
         <a href={project.url} target='_blank'>
        <div>
<div  className="d-flex justify-content-center" ><img src={project.img} alt=''></img></div>
<h2 className='text-center my-2'>{project.title}</h2>

        </div>
        </a>
    </Col>
    
  )
}

export default ProjectCard