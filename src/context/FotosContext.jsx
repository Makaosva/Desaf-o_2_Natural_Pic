import { createContext, useEffect, useState } from "react";
const PHOTO_URL = "/photos.json";

export const FotosContext = createContext();

export const FotosProvider = ({ children }) => {
  const [fotos, setFotos] = useState([]);
  const getFotos = async () => {
    try {
      const res = await fetch(PHOTO_URL);
      const { fotos: fotosDB } = await res.json();
      setFotos(fotosDB.map((foto) => ({ ...foto, isFavorite: false })));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getFotos();
  }, []);

  return (
    <FotosContext.Provider value={{ fotos, setFotos }}>
      {children}
    </FotosContext.Provider>
  );
};
