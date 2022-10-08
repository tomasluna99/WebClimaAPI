import {Container, Row, Col, Table} from "react-bootstrap";
const Formulario = ({ infoClima }) => {
  const { coord, weather, main, sys, name } = { ...infoClima };
  return ( 
  <>
  <Container>
  <Row>
  <Col md={8}>
  <Table striped bordered hover size ="sm">
      <tbody>
        <tr>
          <td>Localidad</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Pais</td>
          <td>{sys.country}</td>
        </tr>
        <tr>
        <td>Coordenadas</td>
        <td> Longitud: {coord.lon} Latitud: {coord.lat}
        </td>
        </tr>
        <tr>
        <td>Pronostico</td>
        <td>{weather[0].description}</td>
        </tr>
        <tr>
        <td>Temperatura</td>
        <td>{main.temp}</td>
        </tr>
        <tr>
        <td>La Maxima</td>
        <td>{main.temp_max}</td>
        </tr>
       <tr>
      <td>La Minima</td>
      <td>{main.temp_min}</td>
      </tr>
      <tr>
     <td>Sensacion Tèrmica</td>
    <td>{main.feels_like}</td>
    </tr>
      </tbody>
    </Table>
  </Col>
  </Row>
  </Container>
  
  </> );
}
 
export default Formulario;