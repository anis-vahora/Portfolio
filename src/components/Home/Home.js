import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import homeLogo from "../../Assets/coder-avatar.png";
import Home2 from "./Home2";
import pdf from "../../Assets/Mahammad_Anis_Vahora_v1.pdf";
import { Document, Page, pdfjs } from "react-pdf";



import Type from "./Type";

function Home() {
  return (
    <section>
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          <Col md={6} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'm
              <strong className="main-name"> Anis Vahora</strong>
            </h1>
            <div style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
            <div style={{  textAlign: 'left', paddingLeft: '50px' }}>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ cursor: 'pointer', maxWidth: '350px' }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </div>
          </Col>
          
          <Col md={6} style={{ paddingBottom: 0 }}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "550px", maxWidth: '750px' }}
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
    
    <Home2 />
  </section>
  
  );
}

export default Home;
