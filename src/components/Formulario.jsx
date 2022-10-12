import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Informacion from "./Informacion";

const Formulario = () => {
  const [datosclima, setDatosClima] = useState();
  const [ciudad, setCiudad] = useState("");

  const consultarAPI = async () => {
    try {
      let respuesta = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=$&APPID=370fd6c1a4ad7f1281fc4876c646d91d"
      );
      const respuestaClima = await respuesta.json();
      return respuestaClima;
    } catch {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCiudad(ciudad.trim());
    console.log(ciudad);
    consultarAPI();
  };

  useEffect(() => {
    if (ciudad.trim().length > 0) {
      consultarAPI().then((respuestaDatosClima) => {
        setDatosClima(respuestaDatosClima);
      });
    }
  }, [ciudad]);

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Form className="p-2 my-3">
              <Button type="submit">Buscar</Button>
            </Form>
          </Col>
        </Row>
        <Informacion />
      </Container>
    </>
  );
};

export default Formulario;
