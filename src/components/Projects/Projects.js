import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import servicely from "../../Assets/Projects/servicely.png";
import rythmic from "../../Assets/Projects/image.png";
import suicide from "../../Assets/Projects/suicide.png";
import ambutech from "../../Assets/Projects/ambutech.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rythmic}
              isBlog={false}
              title="RHYTHMIC TUNES"
              description= {<p><p>"A Rhythmic Tunes" app empowers seamless song upload, discreet background management, song liking, and advanced
              playlist utilization, significantly enhancing the user’s music experience </p>
              <p> Implemented Background receivers for seamless song management, enhancing user experience within the app environment</p>
                <p>This Kotlin-powered app simplifies music discovery, empowers user uploads, and offers intuitive management via Firebase integration.</p>
               </p>
              }         
              ghLink="https://github.com/AmanSingh071/Rhythmic-app"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ambutech}
              isBlog={false}
              title="AMBUTECH"
              description={<p><p>Developed AMBUTECH app utilizing Flutter and Firebase to enable live ambulance/hospital tracking, local blood donor
              location, and real-time chat with donors for enhanced emergency response and healthcare accessibility. </p>
              <p>  Engaged in real-time communication with blood donors, integrating geolocation for viewing donors, hospitals, and ambulances.</p>
                <p>Implemented FCM token integration for efficient notification delivery, and developed a seamless appointment-making feature</p>
               </p>
              }   
              ghLink="https://github.com/AmanSingh071/Ambutech"
              // demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={servicely}
              isBlog={false}
              title="Editor.io"
              description={<p><p>By employing static site generation, we achieved a remarkable 40% reduction in load times, significantly boosting overall system efficiency. </p>
              <p>  Our innovative feature empowers users to connect with top-rated service providers seamlessly through real-time chat capabilities.</p>
                <p>Elevate user engagement through integrated in-app chat and live geolocation features, facilitating interactions with top-rated service providers.</p>
               </p>
              } 
              ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink=" "              
            />
          </Col>
 
  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
