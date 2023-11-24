import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="danger">
      <Container className="justify-content-start">
        <Navbar.Brand></Navbar.Brand>
        {/* Links */}

        <Link to="/" className="text-white ms-3 text-decoration-none">
          <i className="bi bi-house fs-6"></i> Home
        </Link>

        <Link to="/contacto" className="text-white ms-3 text-decoration-none">
          <i className="bi bi-journal fs-6"></i> Contacto
        </Link>
      </Container>
      <Container>
        <Link
          to="/happycake"
          className="text-white  text-decoration-none pastel"
        >
          Happy Cake <i className="bi bi-cake fs-4 "></i>
        </Link>
      </Container>
    </Navbar>
  );
};
export default Navigation;
