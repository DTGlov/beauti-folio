import React from 'react';
import './Hero.scss';
import avatar from '../../assets/3.PNG';

import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../../data/animate';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="hero-container-text"
        >
          <motion.p variants={fadeInUp} className="hero-container-text-first">
            Hi, I'm Dave 😎
          </motion.p>
          <motion.p variants={fadeInUp} className="hero-container-text-second">
            I'm a Fullstack JavaScript Web Developer experienced in building
            cutting-edge and responsive web applications. I'm currently
            exploring and building real time applications with WebSockets.
          </motion.p>
          <motion.div variants={fadeInUp} className="button">
            <p className="button-content">
              <a
                href="https://docs.google.com/document/d/19k1L9yZvE0n0LRYNyqVh9hVK_2uBo9a1kIy2sDcLzBc/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </p>
          </motion.div>
        </motion.div>
        <div className="hero-container-image">
          <img
            src={avatar}
            alt="avatar"
            className="hero-container-image-avatar"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
