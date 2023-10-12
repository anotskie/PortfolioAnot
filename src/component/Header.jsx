import { Container, Nav, Navbar } from "react-bootstrap";

function BasicExample() {
  return (
    <Container fluid>
    <Navbar style={{ backgroundColor: "#557056", width: "100%" }}>
      <Nav className="me-auto">
        <Nav.Link href="#home" className="text-white">
          Home
        </Nav.Link>
        <Nav.Link href="#features" className="text-white">
          Skills
        </Nav.Link>
        <Nav.Link href="#pricing" className="text-white">
          Projects
        </Nav.Link>
        <Nav.Link href="#pricing" className="text-white">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
    </Container>
  );
}

export default BasicExample;
