import React from 'react';

import sketch from './sketch';
import p5 from 'p5';
import './home.scss'
import Confetti from "react-confetti";
const TEXT = 'Congrats !!  ';
import logo from '../../images/logo olympiades vertical.png'
import { db , auth } from '../../fire';
import { set, ref, onValue, remove, update } from "firebase/database";

const Home = () => {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;

    // NOTE: If you change TEXT value to something else, you'll need to make changes in sketch.js as well to make it work
    // See my comments in sketch.js
    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  })
  

// Get the current user
const user = auth.currentUser;

if (user) {
  // User is signed in
  const lastSignInTime = user.metadata.lastSignInTime;
  const email = user.email;
 
  // Reference to the user's data in the Firebase Realtime Database
  set(ref(db, `/${auth.currentUser.uid}`), {
    lastSignInTime: lastSignInTime,
    email: email
  });

  console.log("Last sign-in time: ", lastSignInTime);
} else {
  // No user is signed in
  console.log("No user signed in");
}


  return (
    <div className="wraper">
<Confetti />


    <img className='image' src={logo} alt="" />
    <div className="main ">
      
      <div ref={canvasRef} />
    </div >
    </div>
  )
}

export default Home;

/* import React from "react";
import { Bounce, Fade, Flip, LightSpeed, Roll, Rotate, Zoom } from "react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import "./home.scss";
import Confetti from "react-confetti";

const  Home = () => {
  return (
    <Container className="container">
      <Confetti />
      <Row className="happy">
        <div>
          <Zoom left>
            <Col sm={1}><h1 className="red">H</h1></Col>
          </Zoom>
        </div>
        <div>
          <Bounce top>
            <Col sm={1}><h1 className="blue">A</h1></Col>
          </Bounce>
        </div>
        <div>
          <Flip top>
            <Col sm={1}><h1 className="green">P</h1></Col>
          </Flip>
        </div>
        <div>
          <Flip bottom>
            <Col sm={1}><h1 className="purple">P</h1></Col>
          </Flip>
        </div>
        <div>
          <Fade right>
            <Col sm={1}><h1 className="orange">Y</h1></Col>
          </Fade>
        </div>
      </Row>
      <Row className="birthday">
        <Col sm={4}></Col>
        <div>
          <Roll left>
            <Col sm={1}><h1 className="purple">B</h1></Col>
          </Roll>
        </div>
        <div>
          <LightSpeed right>
            <Col sm={1}><h1 className="yellow">I</h1></Col>
          </LightSpeed>
        </div>
        <div>
          <Rotate top right>
            <Col sm={1}><h1 className="red">R</h1></Col>
          </Rotate>
        </div>
        <div>
          <Bounce bottom>
            <Col sm={1}><h1 className="purple">T</h1></Col>
          </Bounce>
        </div>
        <div>
          <Roll top>
            <Col sm={1}><h1 className="green">H</h1></Col>
          </Roll>
        </div>
        <div>
          <Rotate bottom left>
            <Col sm={1}><h1 className="blue">D</h1></Col>
          </Rotate>
        </div>
        <div>
          <Flip left>
            <Col sm={1}><h1 className="yellowgreen">A</h1></Col>
          </Flip>
        </div>
        <div>
          <LightSpeed left>
            <Col sm={1}><h1 className="orange">Y</h1></Col>
          </LightSpeed>
        </div>
      </Row>
      <Row className="gary">
        <Col sm={3}></Col>
        <div>
          <Rotate bottom right>
            <Col sm={1}><h1 className="blue">G</h1></Col>
          </Rotate>
        </div>
        <div>
          <LightSpeed right>
            <Col sm={1}><h1 className="red">A</h1></Col>
          </LightSpeed>
        </div>
        <div>
          <Flip right>
            <Col sm={1}><h1 className="green">R</h1></Col>
          </Flip>
        </div>
        <div>
          <Zoom bottom>
            <Col sm={1}><h1 className="yellow">Y</h1></Col>
          </Zoom>
        </div>
      </Row>
    </Container >
  )
}

export default Home; */