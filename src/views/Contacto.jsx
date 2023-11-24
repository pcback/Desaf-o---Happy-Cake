import React from "react";
import { Container } from "react-bootstrap";

const Contacto = () => {
  return (
    <>
      <Container>
        <div className="div1">
          <h1 className="mb-4">Cuentanos en que te podemos ayudar ?</h1>
          <h3>Correo:</h3>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Descripcion
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="button" class="btn btn-primary">
            Enviar
          </button>
        </div>
      </Container>
    </>
  );
};

export default Contacto;
