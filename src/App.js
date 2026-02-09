import React, { useState, useEffect } from 'react';
import './styles.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPython, FaFilePdf } from "react-icons/fa";
import { GiBootKick } from "react-icons/gi";
import { SiRaylib } from "react-icons/si";

import image1 from './assets/IMG_work.jpg';
import image2 from './assets/IMG_2.JPEG';
import image3 from './assets/DHTsensor.png';
import moonBackground from './assets/IMG_moon3.jpg';
import moonBackground1 from './assets/IMG_moon.jpg';
import moonBackground2 from './assets/IMG_moon2.jpg';
import gif1 from './assets/download.gif';
import gif2 from './assets/second.gif';
import screengrab from './assets/enemymines.png';
import resumeScreenshot from './assets/resume-ss.png';


const moonImages = [moonBackground, moonBackground1, moonBackground2];

function App() {

  const [currentMoonImage, setCurrentMoonImage] = useState(moonImages[0]); 
  const [isGlitching, setIsGlitching] = useState(false); 

useEffect(() => {
  //Interval every 5 seconds
  const intervalID = setInterval(() => {
    setIsGlitching(true); 
    // Picks a random moon image that will be different than the current image
    let newImage; 
    do {
	newImage = moonImages[Math.floor(Math.random() * moonImages.length)]; 
    } while (newImage === currentMoonImage); 
    setCurrentMoonImage(newImage); 

    //Turn off the glitch after a short time
    setTimeout(() => {
	setIsGlitching(false); 
    }, 300); 
  }, 5000); 

  //clean up the interval when the component unmounts
  return () => clearInterval(intervalID); 
}, [currentMoonImage]); // This will rerun effct if the image changes to avoid picking same one twice


	

return (
   <>
    <header className="main-header">
	<a href="#top" className="logo">Sean Ruth</a>
	<nav className="main-nav">
	  <ul>
	    <li><a href="#about">About</a></li>
	    <li><a href="#projects">Projects</a></li>
	    <li><a href="#resume">Resume</a></li>
	    <li><a href="#contact">Contact</a></li>
	  </ul>
	</nav>
    </header>

    <main>
	<section
	  id="hero" 
	  className={`hero ${isGlitching ? 'is-glitching' : ''}`} 
	  style={{
	    backgroundImage: `
	      linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.4)),
	      url(${currentMoonImage})
	    `
	  }}
	>
	  <div className="container">
	    <h1 className="glitch-text">Full Stack Developer</h1>
	    <p>Building functional and robust digital solutions.</p>
	  </div>
	</section>

	<div className="marquee">
  	  <div className="marquee-content">
	    <span>Hello from my CI/CD Pipeline</span>
    	    <span>PYTHON</span>
	    <span>Linux</span>
	    <span>C++</span>
	    <span>Data Structures</span>
	    <span>Algorithms</span>
	    <span>Java</span>
	    <span>REACT</span>
	    <span>JAVASCRIPT</span>
	    <span>RAYLIB</span>
	    <span>SQL</span>
	    <span>EMSCRIPTEN</span>
	    <span>PYTHON</span>
	    <span>Linux</span>
	    <span>C++</span>
	    <span>Data Structures</span>
	    <span>Algorithms</span>
	    <span>Java</span>
	    <span>REACT</span>
	    <span>JAVASCRIPT</span>
	    <span>RAYLIB</span>
	    <span>SQL</span>
	    <span>EMSCRIPTEN</span>
  	  </div>
	</div>
	

	<section id="about">
	  <div className="container">
	    <h2>About Me</h2>
	    <div className="about-content">
	      <div className="about-text">
		<p> I am an aspiring Full Stack Developer with a unique background in U.S. Navy Explosive Ordnance Disposal. My experience leading high-stakes missions has instilled in me a deep sense of discipline, a rigorous approach to problem-solving, and a commitment to excellence. </p>
	  	<p>Transitioning these skills to the tech world, I aspire to build robust and efficient solutions. I thrive in dynamic environments and am passionate about tackling complex challenges.</p>
	      </div>
	    <div className="about-image-container">
	  	<img src={image1} alt="Me" className="about-image" />
	  	<img src={image2} alt="Me" className="about-image" />
	    </div>
	   </div>
	  </div>
	</section>

	<section id="projects" className="container">
	  <h2>My Projects</h2>
	  <div className="project-grid">
	  <a href="http://sensor.s-ruth.dev" target="_blank" rel="noopener noreferrer" className="project-card-link">
	    <div className="project-card">
	      <img src={image3} alt="Sensor Project" className="project-image" />
	      <h3>Sensor Data Dashboard</h3>
	      <p> A live, full-stack application for visualizing real-time IoT sensor data using Gemini 1.5 flash API to integrate Natural Language Processing to Standard Query Language (NLP2SQL).  </p>
	      <div className="card-footer">
	        <span className="project-url">sensor.s-ruth.dev </span>
	      </div>
	    </div>
	  </a>

	  <a href="https://github.com/Sruth827/Maze-Solver"
	    target="_blank"
	    rel="noopener noreferrer"
	    className="project-card-link"
	  >
   	    <div className="project-card">
	      <img src={gif1} alt="Building the maze" className="project-image" />
	      <h3><FaPython /> Maze Solver Visualization</h3>
	      <p>
	  	A python desktop application, built with tkinter, that visualizes and compares Depth First Search and Breadth First Search algorithms in randomly generated mazes. 
	      </p>
	      <div className="card-footer">
	        <span className="project-url"><FaGithub /> View source code on Github </span>
	      </div>
	    </div>
	  </a>


	  <a href="https://behindenemymines.s-ruth.dev/landmines.html"
	    target="_blank"
	    rel="noopener noreferrer"
	    className="project-card-link"
	  >
   	    <div className="project-card">
	      <img src={screengrab} alt="Behind Enemy Mines" className="project-image" />
	      <h3><SiRaylib /> Behind Enemy Mines Game</h3>
	      <p>
	  	Behind Enemy Mines is a C++ game that was built using Raylib and compiled to Webassembly using Emscripten. Audio is still a work in progress.
	      </p>
	      <div className="card-footer">
	        <span className="project-url"><FaGithub /> View source code on Github </span>
	      </div>
	    </div>
	  </a>

	  
	  </div>
	</section>

	<section id="resume" className="container">
	  <h2>Resume</h2>
	  <div className="resume-display">
	    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
	      <img
		src={resumeScreenshot}
		alt="A preview of my resume"
		className="resume-screenshot"
	      />
	    </a>
	    <a
	      href="/Resume.pdf"
	      download="Resume.pdf"
	      className="btn resume-download-btn"
	     >
		<FaFilePdf />
	     </a>
	   </div>
	</section>

	<section id="contact" className="container">
	  <h2>Contact Me</h2>
	  <div className="contact-links">   
	    <a 
	      href="https://www.linkedin.com/in/sean-w-ruth"
	      className="btn"
	      target="_blank"
	      rel="noopener noreferrer"
	    >
	      <FaLinkedin /> LinkedIn
	    </a>

	    <a href="https://www.github.com/sruth827" className="btn">
	      <FaGithub /> Github
	    </a>

	    <a href="https://www.boot.dev/u/sruth" title="Boot.dev/sruth" className="btn">
	      <GiBootKick /> Boot.dev
	    </a>

	    <a href="mailto:seanruth27@gmail.com" className="btn">
	      <FaEnvelope /> Email Me
	    </a>
		
	  </div>
	</section>
    </main>
   </>
  );
}

export default App;
