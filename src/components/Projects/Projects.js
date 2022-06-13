import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import ideas_saas from "../../Assets/Projects/99ideas-saas.png";
import newsapp from "../../Assets/Projects/newsapp.png";
import textUtils from "../../Assets/Projects/textUtils.png";
import wellingkar from "../../Assets/Projects/wellingkar.png";
import myNotebook from "../../Assets/Projects/myNotebook.png";

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
              imgPath={textUtils}
              isBlog={false}
              title="TextUtils"
              description="Edit text on that platform and give your text a bold look and convert your text to different cases here is easy too. Count word and character of your text."
              link="https://arijit179.github.io/textutils/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myNotebook}
              isBlog={false}
              title="My Notebook"
              description="Keep your notes secured and stored into this platform and save storage of your devices.Create your account here and start your journey with this platform."
              link="https://github.com/arijit179/MyNotebook/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsapp}
              isBlog={false}
              title="News Monkey"
              description="Read daily news here and get latest informations about various topics.Topic wise news available like technology , sports etc."
              link="https://github.com/arijit179/newsapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wellingkar}
              isBlog={false}
              title="wellingkar"
              description="A website for admissions process and form fill up of students of a college and selection process and also result generation of students."
              link="https://pgdm2022-24.welingkar.org/weschool/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ideas_saas}
              isBlog={false}
              title="99ideas-saas"
              description="A website for portfolio and contacts of a company and various features are there like blogs to read etc. and feedbacks for clients."
              // link="https://www.99ideas.in/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
