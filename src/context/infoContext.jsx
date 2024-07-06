import { createContext, useState } from "react";
import { createClient } from "pexels";

const client = createClient(
  "GIuvIZH3E1wpqPZlH4SkzwFPPaYKCwIC2g3ZgY1YxGn1ltFkLRRm3X1Z"
);

// All requests made with the client will be authenticated
const PHOTO_URL = "/photos.json";
export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [photo, setPhoto] = useState(infoMasculino);
  const [photofav, setPhotoFav] = useState(PHOTO_URL);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhotoFav([...favorita, photofav]);
    alert("Foto agregada a favoritos");
  };

  const globalState = {
    photos,
  };

  return (
    <InfoContext.Provider value={globalState}>{children}</InfoContext.Provider>
  );
};
