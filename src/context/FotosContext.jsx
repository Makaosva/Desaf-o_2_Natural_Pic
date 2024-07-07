import { createContext, useEffect, useState } from "react";
const PHOTO_URL = "/photos.json";

export const FotosContext = createContext();

export const FotosProvider = ({ children }) => {
  const [fotos, setFotos] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch(PHOTO_URL);
      const data = await res.json();
      setFotos(data.photos);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FotosContext.Provider value={{ fotos, setFotos }}>
      {children}
    </FotosContext.Provider>
  );
};
