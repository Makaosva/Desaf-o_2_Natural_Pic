import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import InfoProvider from "./context/infoContext";

const App = () => {
  return (
    <InfoProvider>
      <div>
        <Navbar />

        <Routes>
          <Route path="/NaturalPic" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
      </div>
    </InfoProvider>
  );
};
export default App;
