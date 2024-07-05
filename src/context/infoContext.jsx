import React, { createContext, useState } from "react";
import { createClient } from "pexels";

const client = createClient(
  "GIuvIZH3E1wpqPZlH4SkzwFPPaYKCwIC2g3ZgY1YxGn1ltFkLRRm3X1Z"
);

// All requests made with the client will be authenticated

export const InfoContext = createContext();

const url = ["Ignacio", "Esteban", "Carlos", "Enrique"];

export const InfoProvider = ({ children }) => {
  const [infoM, setInfoM] = useState(infoMasculino);

  return (
    <InfoContext.Provider value={{ infoM, setInfoM }}>
      {children}
    </InfoContext.Provider>
  );
};
