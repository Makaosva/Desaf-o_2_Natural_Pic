import { useContext } from "react";
import { InfoProvider } from "../context/infoContext";
import { Container } from "react-bootstrap";

const Gallery = () => {
  const { photos } = useContext(InfoProvider);
  return (
    <Container className="gallery grid-columns-5 p-3">
      {photos.map((photo, i) => (
        <div className="col-12 col-sm-6 col-md-4" key={i}>
          Hola
        </div>
      ))}
    </Container>
  );
};
export default Gallery;
