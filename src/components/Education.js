import React from "react"
import { Row, Col, Container} from 'reactstrap';

import "./Education.css"

function Education() {
  return (
    <div className="Education Container">
        <Container className="Sections">
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
        <div className="Skills">
        <div>
          <h3> SKILLS </h3>
        </div>
        <div>
          <img className="Skill-logo" src="/node.png" alt="Node js logo" title="Node JS" />
          <img className="Skill-logo" src="/aws.png" alt="aws logo" />
          <img className="Skill-logo" src="/socket.png" alt="socket io logo" />
          <img className="Skill-logo" src="/mongo.png" alt="MongoDb logo" />
          <img className="Skill-logo" src="https://img.icons8.com/dusk/100/000000/github.png" alt="github"/>
        </div>
        <div>
          <img className="Skill-logo" src="https://img.icons8.com/dusk/100/000000/react.png" alt="react js"/>
          <img className="Skill-logo" src="https://img.icons8.com/dusk/100/000000/c-programming.png" alt="C language"/>
          <img className="Skill-logo" src="https://img.icons8.com/dusk/100/000000/java-coffee-cup-logo.png" alt="java"/>
          <img className="Skill-logo" src="https://img.icons8.com/dusk/100/000000/python.png" alt="python"/>
          <img className="Skill-logo" src="https://img.icons8.com/dusk/100/000000/css3.png" alt="css"/>
          <img className="Skill-logo" src="https://img.icons8.com/dusk/100/000000/html-5.png" alt="html"/>
          <img className="Skill-logo" src="https://img.icons8.com/dusk/100/000000/javascript-logo.png" alt="JavaScript"/>
        </div>
        </div>
      </div>
  )
}

export default Education;