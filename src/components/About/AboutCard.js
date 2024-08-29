import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anis Vahora </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />
            I am currently employed as a software developer at Hifinite Health.
            <br />
            I have recently completed Post Graduation in Blockchain Technology and
            previously I have completed Post Graduation in Predictive Analytics
            and Bachelors in Computer Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports ⚽︎
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching F1 🏎️
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying long drives, exploring new routes and scenic landscapes.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only way to do great work is to love what you do."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
