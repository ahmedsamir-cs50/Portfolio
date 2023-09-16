import React from 'react'
import { Navbarlogin } from './NavBar/navbar'
import { Header } from './Header/header'
import { Services } from './Services/services';
import { Footer } from '../Footer/Footer';
import Slider from './Projects/ProjectsSlider';
import Skills from './skills/skills';
import Projects from './Projects/Projects';

export const ContainerforHome = () => {
  return (
    <div>
        <Header/>
        <Skills/>
        <Services/>
        <Projects/>
        <Slider/>
        <Footer/>
      
    </div>
  )
};
