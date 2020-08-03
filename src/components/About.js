import React, { useState, useRef, useEffect } from "react";
import {useWindowScroll} from "react-use";
import "./About.css";
import { Button, Row, Col, Container} from 'reactstrap';

import Education from "./Education";
import ScrollToTop from "./ScrollToTop";
import Experience from "./Experience";
import Project from "./Project";
import Resume from "./Resume";
import Navigation from "./Navigation";

function About() {

  const [navPos, setNavPos] = useState(undefined)

  const educationSection = useRef(null);
  const experienceSection = useRef(null);
  const projectSection = useRef(null);
  const resumeSection = useRef(null);
  const navBar = useRef(null);

  // We only need to the know the position of the navigation bar at the initial mount
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      const position = navBar.current.offsetTop - 10;
      setNavPos(position);
      console.log("position: ", position)
    } 
  });

  const gotoEducationSection = () => window.scrollTo(
    {top: educationSection.current.offsetTop, 
      behavior: "smooth"
    });
  const gotoExperienceSection = () => window.scrollTo(
    {top: experienceSection.current.offsetTop, 
      behavior: "smooth"
    });
  const gotoProjectSection = () => window.scrollTo(
    {top: projectSection.current.offsetTop, 
      behavior: "smooth"
    });
  const gotoResumeSection = () => window.scrollTo(
    {top: resumeSection.current.offsetTop, 
      behavior: "smooth"
    });
 
  const callback = (sec) => {
    if(sec === 'ed'){
      gotoEducationSection();
    }
    if(sec === "ex"){
      gotoExperienceSection();
    }
    if(sec === 'pro'){
      gotoProjectSection();
    }
    if(sec === "res"){
      gotoResumeSection();
    }
  }

  return (
    <div>
      <ScrollToTop/>
        <Container className="Container Sections">
          <Row className="Intro">
            <Col xs="12" md="4">
            <img className="Image-sub" src='/image.jpeg' />
            </Col >
            <Col xs="12" md="4">
            <p > Tenzin Dolma Gyalpo is a Tibetan refugee from India, the eldest daughter of three, and a leader.
              She is passionate about education, specifically impact and influence of technology on today's education.
              She is a keen learner, an explorer (she likes to think so), and a good listener. 
            </p>
            <div className="Life-lessons">
              Three things that life has recently taught her: 
              <ul>
                <li> Family is a complicated bubble.</li>
                <li> Life is fragile. </li>
                <li> You define your own purpose in life. </li>
              </ul>
            </div>
            </Col>
          </Row>
        </Container>
        <div>
        <div ref={navBar}>
          <Navigation callback={(sec)=>callback(sec)} position={navPos}/>
        </div>
        
        <div ref={educationSection}>
          <Education />
        </div>
        <div ref={experienceSection}>
          <Experience />
        </div>
        <div ref={projectSection}>
          <Project />
        </div>
        <div ref={resumeSection}>
          <Resume />
        </div>
        </div>
    </div>
  )
}

export default About; 