import React from 'react';
import './MainPage.scss';
import Hero from '../components/HeroSection/Hero';
import Skills from '../components/SkillSection/Skills';
import Tools from '../components/ToolSection/Tools';
import Project from '../components/Project/Project';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

function MainPage() {
    return (
        <div className="main-page">
            <Hero />
            <Skills />
            <Tools />
            <Project />
            <Contact />
            <Footer/>
        </div>
    )
}

export default MainPage
