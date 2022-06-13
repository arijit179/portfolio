import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arijit Banerjee </span>
            from <span className="purple"> Burdwan , West Bengal , India.</span>
            <br />I am a junior MERN stack developer at 99 Ideas Infotech
            Services LLP and also pursuing B.Tech in Computer Science and
            Engineering from SKFGI , Mankundu.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Browsing Internet for future tecnologies and
              latest news
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arijit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
