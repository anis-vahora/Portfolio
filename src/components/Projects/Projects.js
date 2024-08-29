import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";
import hifinite from "../../Assets/Projects/hifinite.png";
import lytikal from "../../Assets/Projects/lytikal.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Work <strong className="purple">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <Card className="project-card-view" style={{borderRadius:'20px' }}>
              <Card.Img
               style={{borderRadius:'25px', maxWidth: "250", maxHeight: "200px", objectFit:'cover' }}
                variant="top"
                src={hifinite}
                alt="card-img"
              />
              <Card.Body>
                <Card.Title>Hifinite Health</Card.Title>
                <div
                  style={{
                    textAlign: "left",
                    paddingTop: "10px",
                  }}
                >
                  <p>
                    <li>
                    When I joined Hifinite Health as a Software Developer, I dove into a dynamic environment where innovation was the norm. My initial focus was on <b className="purple">designing and implementing advanced healthcare features</b> that transformed patient interactions.
                     Imagine a system where user engagement surged by 42%—that’s what we achieved by blending cutting-edge machine learning models with a thoughtful design.
                    </li>
                    <li>
                    In the heart of the project, I tackled the integration of <b className="purple">varied patient data sources</b>. This wasn’t just about connecting systems; it was about crafting a solution that improved data accuracy by 18%, paving the way for better patient care and smoother operations across departments.
                    </li>
                    <li>
                    One of my proudest accomplishments was developing and integrating real-time <b className="purple">AWS QuickSight dashboards</b>. These dashboards didn’t just display data; they empowered decision-makers with timely insights that boosted revenue by 23% and significantly impacted patient health outcomes.
                    </li>
                    <li>
                    My role also involved <b className="purple">architecting and optimizing data warehousing solutions</b> with Java, PostgreSQL, and AWS Redshift.  This effort was pivotal in speeding up data retrieval and supporting robust analytics.
                    </li>
                    <li>
                    Collaboration was at the core of our success. By working closely with cross-functional teams, we streamlined workflows and cut delivery times, while my commitment to code quality reduced production bugs and enhanced system reliability.
                    </li>
                    
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view" style={{borderRadius:'20px' }}>
              <Card.Img
               style={{borderRadius:'25px', maxWidth: "250", maxHeight: "200px", objectFit:'cover' }}
                variant="top"
                src={lytikal}
                alt="card-img"
              />
              <Card.Body>
                <Card.Title>Lytikal Insights</Card.Title>
                <div
                  style={{
                    textAlign: "left",
                    paddingTop: "10px",
                  }}
                >
                  <ul>
                    <li>
                    Starting at Lytikal Insights, I embraced the challenge of enhancing stock market analysis through <b className="purple">Trading View integration</b>. This wasn’t just about adding features; it was about revolutionizing how users engaged with their investments, ultimately laying the groundwork for an improved investment strategy.
                    </li>
                    <li>
                    During my time, I focused on <b className="purple">developing portfolio management features and watchlists</b>, which dramatically improved user experience. By streamlining API data fetching using Python and Flask, we achieved a 25% reduction in latency, making data retrieval faster and more efficient.
                    </li>
                    <li>
                    An essential part of my role was <b className="purple">creating and configuring Docker containers</b> for modular components. This innovation simplified our development process, making it easier to integrate new features and enhance our deployment workflows.
                    </li>
                    <li>
                    Through daily stand-ups and sprint planning, I contributed to fostering a collaborative team environment, ensuring we met our goals and delivered a reliable product.
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Project </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Project: OpenSwap"
              description="OpenSwap is a cutting-edge decentralized exchange (DEX) designed to provide users with a seamless and secure platform for swapping tokens and participating in liquidity provision. Built on the principles of decentralization and user empowerment, OpenSwap offers a revolutionary way for individuals to engage in cryptocurrency trading without the need for intermediaries."
              ghLink=""
              demoLink="https://t.co/5dbJuXyGLI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
