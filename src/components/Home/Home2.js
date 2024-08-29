import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I've stumbled into a world where lines of code weave dreams into
              reality.
              <br />
              <br />I am proficient in a range of classic and advanced technologies, including
              <i>
                <b className="purple">
                  {" "}
                  React.js, JavaScript, TypeScript, Node.js, Solidity, and Machine Learning, among others.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              Fueling my passion for product development, I harness the power of{" "}
              <b className="purple">Node.js</b> alongside
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript and TypeScript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js, </b>
              </i>
              while also delving into the world of{" "}
              <i>
                <b className="purple">blockchain with Solidity, </b>
              </i>
              pioneering innovation at the intersection of technology and
              possibility.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="my-photo"
                style={{
                  borderRadius: "50%",
                  maxWidth: "100%"
                  
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anis-vahora"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/anisvahora786"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anis-vahora-7728ab195/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
