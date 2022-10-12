import "react-bootstrap";
import { Container, Row, Col, Table } from "react-bootstrap";

const Informacion = ({ datosClima }) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <td>Ciudad</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Pais</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Coordenadas</td>
                  <td>Longitud: Latitud:</td>
                </tr>
                <tr>
                  <td>Pronostico del Clima</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Temperatura</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Temperatura Max.</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Temperatura Min.</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Sensacion Tèrmica</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Informacion;
