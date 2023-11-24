import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="text-center ">
      <div className="div1">
        <h1 className="pt-5">
          Bienvenido a <span className="fw-bold">Happy Cake</span>
        </h1>
        <h6> El lugar de los pasteles felices </h6>
        <i className="bi bi-cake2-fill fs-1 cake1"></i>
      </div>
    </Container>
  );
};
export default HomePage;
