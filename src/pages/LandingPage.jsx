import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../component/Header";
import {
  Card,
  Image,
  Button,
  Form,
  ListGroup,
  Carousel,
} from "react-bootstrap";
import "../styles/styles.css";
import gradpic from "../assets/gradpic.jpg";
import "../styles/landingpage.css";
import "../styles/card.css";
import "../styles/form.css";

import Projects from "../component/Projects";

import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";

import android from "../assets/android.png";
import blender from "../assets/blender.png";
import csharp from "../assets/csharp.png";
import django from "../assets/django.png";
import java from "../assets/java.png";
import js from "../assets/js.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import reactjs from "../assets/reactjs.png";
import unitybnw from "../assets/unitybnw.png";

import location from "../assets/location.png";
import mail from "../assets/mail.png";
import linkedinbnw from "../assets/linkedinbnw.png";
import githubbnw from "../assets/githubbnw.png";
import phone from "../assets/phone.png";

function LandingPage() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Card className="text-white mx-auto mt-5">
          <Card.Body>
            <Card.Title>
              <h1>Hi, I'm Arnold Celis</h1>
            </Card.Title>
            <Card.Text>
              <span className="text-introduction">
                <p>
                  Welcome to my portfolio! I am a versatile digital creator with
                  a passion for turning ideas into interactive experiences.
                </p>
              </span>
              <div className="d-flex justify-content-around">
                {" "}
                <a
                  href="https://github.com/anotskie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={github} style={{ cursor: "pointer" }} />
                </a>
                <a
                  href="https://www.facebook.com/Hanuman.Me.3.15.01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={facebook} style={{ cursor: "pointer" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/arnold-celis-095492278/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={linkedin} style={{ cursor: "pointer" }} />
                </a>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        {/* ------------------------------------------------------------------------------------------ */}
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <Card className="text-white" style={{ backgroundColor: "black" }}>
              <span className="text-introduction">
                <p>
                  I am a fresh graduate of BS in Computer Science at Laguna
                  University, Santa Cruz, Laguna. With a diverse skill set that
                  spans across web development, app development, game
                  development, and 3D modeling, I have dedicated myself to the
                  exciting world of technology and design.
                </p>
              </span>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src={gradpic}
                style={{ height: "auto", width: "50%" }}
                rounded
              />
            </div>
          </Col>
        </Row>
        <hr className="hr hr-blurry mt-4" />{" "}
        {/* ------------------------------------------------------------------------------------------ */}
        <h1 className="d-flex justify-content-center align-items-center">
          Skills
        </h1>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <img src={android} />
            <img src={blender} />
            <img src={csharp} />
            <img src={django} />
            <img src={java} />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <img src={js} />
            <img src={php} />
            <img src={python} />
            <img src={reactjs} />
            <img src={unitybnw} />
          </Col>
        </Row>
        <hr className="hr hr-blurry mt-5" />{" "}
        {/* ------------------------------------------------------------------------------------------ */}
        <h1 className="d-flex justify-content-center align-items-center mb-5">
          Projects
        </h1>
        <Row>
          <Col>
            <Projects />
          </Col>
        </Row>
        {/* ------------------------------------------------------------------------------------------ */}
        <hr className="hr hr-blurry mt-5" />{" "}
        <h1 className="d-flex justify-content-center align-items-center">
          Sample Models
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          {" "}
        </div>
        {/* ------------------------------------------------------------------------------------------ */}
        <hr className="hr hr-blurry mt-5" />{" "}
        <h1 className="d-flex justify-content-center align-items-center">
          Contact
        </h1>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            {" "}
            <ListGroup>
              <h2>Get in touch</h2>
              <ListGroup.Item
                style={{ backgroundColor: "black" }}
                className="text-white"
              >
                <img src={location} style={{ marginRight: "10px" }} /> Lantican
                Residence, 4th Street, Marymount Village, Anos Los Baños, Laguna
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "black" }}
                className="text-white"
              >
                <img src={mail} style={{ marginRight: "10px" }} />{" "}
                arnoldcelis85@gmail.com
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "black" }}
                className="text-white"
              >
                <img src={githubbnw} style={{ marginRight: "10px" }} />{" "}
                github.com/anotskie
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "black" }}
                className="text-white"
              >
                <img src={linkedinbnw} style={{ marginRight: "10px" }} />{" "}
                linkedin.com/in/arnold-celis-095492278/
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "black" }}
                className="text-white"
              >
                <img src={phone} style={{ marginRight: "10px" }} /> 0999 497
                3755 | 0955 710 7734
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="login-box">
              <form>
                <div className="user-box">
                  <input type="text" name="" required="" />
                  <label>Full Name</label>
                </div>
                <div className="user-box">
                  <input type="email" name="" required="" />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input type="email" name="" required="" />
                  <label>Message</label>
                </div>
                <center>
                  <a href="#">
                    SEND
                    <span></span>
                  </a>
                </center>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="mt-5">
        <Header />
      </div>
    </div>
  );
}

export default LandingPage;
