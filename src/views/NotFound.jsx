import { Container } from "react-bootstrap";

function NotFound() {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">La ruta que intentas consultar no existe 😔</h1>
    </Container>
  );
}

export default NotFound;
