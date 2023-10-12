import React from "react";
import { Card, Button, Image, Container } from "react-bootstrap";

function Projects() {
  return (
    <Container>
      <div className="mx-auto d-flex flex-wrap justify-content-between align-items-center">
        {" "}
        <div>
          {" "}
          <Card className="projects">
            <Card.Header className="projects-info">Featured</Card.Header>
            <Card.Body style={{ backgroundColor: "black" }}>
              <Card.Title className="projects-title">
                Enhancement Request Project
              </Card.Title>

              <Card.Text
                className="projects-subtitle"
                style={{ maxHeight: "100px", maxWidth: "500px" }}
              >
                This feature is integrated into the Chadix.ai website, serving
                as the dedicated page for forum postings related to ideas and
                user requests.
              </Card.Text>
              <Button
                variant="outline-dark"
                href="https://github.com/anotskie/enhancement_request_V2"
                target="_blank"
              >
                Check it out!
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </div>
        <div>
          {" "}
          <Card className="projects">
            <Card.Header className="projects-info">Featured</Card.Header>
            <Card.Body style={{ backgroundColor: "black" }}>
              <Card.Title className="projects-title">
                Fire Emergency Responder Application (FERA)
              </Card.Title>

              <Card.Text
                className="projects-subtitle"
                style={{ maxHeight: "100px", maxWidth: "500px" }}
              >
                My undergraduate thesis project, FERA, aims to improve the
                efficiency and effectiveness of fire emergency response teams by
                offering real-time tracking and communication tools.
              </Card.Text>
              <Button
                variant="outline-dark"
                href="https://github.com/anotskie/fera-app"
                target="_blank"
              >
                Check it out!
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </div>
        <div>
          {" "}
          <Card className="projects">
            <Card.Header className="projects-info">Featured</Card.Header>
            <Card.Body style={{ backgroundColor: "black" }}>
              <Card.Title className="projects-title">
                ERDB CO-OP System
              </Card.Title>
              {/* <Card style={{ background: "" }}>
                <Image src="holder.js/171x180" rounded />
              </Card> */}
              <Card.Text
                className="projects-subtitle"
                style={{ maxHeight: "100px", maxWidth: "500px" }}
              >
                This payroll system is specifically designed for the
                DENR-Ecosystems Research and Development Bureau, providing
                tailored solutions for their payroll management needs
              </Card.Text>
              <Button
                variant="outline-dark"
                href="https://github.com/K4elthaz/COOP-SYSTEM"
                target="_blank"
              >
                Check it out!
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </div>
        <div>
          {" "}
          <Card className="projects">
            <Card.Header className="projects-info">Featured</Card.Header>
            <Card.Body style={{ backgroundColor: "black" }}>
              <Card.Title className="projects-title">
                E-Learning Application
              </Card.Title>
              {/* <Card style={{ background: "" }}>
                <Image src="holder.js/171x180" rounded />
              </Card> */}
              <Card.Text
                className="projects-subtitle"
                style={{ maxHeight: "100px", maxWidth: "500px" }}
              >
                An Android application, created using Android Studio, is
                designed to serve as educational material tailored for children
                at the kindergarten level, offering engaging and interactive
                learning experiences.
              </Card.Text>
              <Button
                variant="outline-dark"
                href="https://github.com/GCKZ/learning"
                target="_blank"
              >
                Check it out!
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
