import { createContext, useEffect, useState } from "react";
const PHOTO_URL = "/photos.json";

export const FotosContext = createContext();

const FotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const getFotos = async () => {
    // try {
    const res = await fetch(PHOTO_URL);
    const { photos: photosDB } = await res.json();
    setPhotos(photosDB.map((photo) => ({ ...photo, isFavorite: false })));
    // } catch (error) {
    //   console.error(error.message);
    // }
  };
  console.log("FotosContext", photos);
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
