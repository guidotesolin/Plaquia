import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Renderizar from "./Renderizar";
import BarraDeNavegacion from "./components/Barradenavegacion";

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
