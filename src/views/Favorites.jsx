import { useContext } from "react";
import { FotosContext } from "../context/FotosContext";

const Favorites = () => {
  const { fotos, setFotos } = useContext(FotosContext);

  const removerFavorito = (id) => {
    const nuevasFotos = fotos.map((foto) => {
      if (foto.id === id) {
        return {
          ...foto,
          isFavorite: false,
        };
      }

      return foto;
    });
    setFotos(nuevasFotos);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {fotos
          .filter((foto) => foto.isFavorite)
          .map((foto, i) => (
            <img
              src={foto.src.tiny}
              alt={foto.alt}
              onClick={() => removerFavorito(foto.id)}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};
export default Favorites;
