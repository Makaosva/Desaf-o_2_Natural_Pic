import { createContext, useEffect, useState } from "react";
// const PHOTO_URL = "/photos.json";

const PHOTO_URL = "https://api.pexels.com/v1/curated?per_page=15";

const client = "GIuvIZH3E1wpqPZlH4SkzwFPPaYKCwIC2g3ZgY1YxGn1ltFkLRRm3X1Z";

export const FotosContext = createContext();

const FotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const getFotos = async () => {
    const res = await fetch(PHOTO_URL, {
      headers: {
        Authorization: client,
      },
    });
    const { photos: photosDB } = await res.json();
    setPhotos(photosDB.map((photo) => ({ ...photo, isFavorite: false })));
  };

  useEffect(() => {
    getFotos();
  }, []);

  return (
    <FotosContext.Provider value={{ photos, setPhotos }}>
      {children}
    </FotosContext.Provider>
  );
};

export default FotosProvider;
