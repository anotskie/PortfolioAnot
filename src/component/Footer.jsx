import { Container, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Container fluid className="p-0">
        <Navbar style={{ backgroundColor: "#557056", height: "30px" }}>
          <p style={{ margin: "10px 0" }} className="ms-5">
            anotskie 2024
          </p>
        </Navbar>
      </Container>
    </footer>
  );
}

export default Footer;
