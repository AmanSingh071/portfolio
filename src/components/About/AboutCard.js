import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aman Singh </span>
            from <span className="purple"> New Delhi, India.</span>
            <br /> I am a final year student pursuing Btech in Computer Science and engineering
            
            <br />
            Additionally, I have worked as a lead Android developer intern in 11 Mantras  .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Documentary 
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " Time will come at the right time."{" "}
          </p>
          <footer className="blockquote-footer">Aman Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
