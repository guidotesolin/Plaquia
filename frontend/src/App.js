import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import Renderizar from "./Renderizar";
import BarraDeNavegacion from "./components/barradenavegacion";

function App() {
  const [idioma, setIdioma] = useState("Esp");

  return (
    <div className="App">
      <BarraDeNavegacion Idioma={idioma} CambiarIdioma={setIdioma} />
      <Renderizar Idioma={idioma} />
    </div>
  );
}

export default App;
