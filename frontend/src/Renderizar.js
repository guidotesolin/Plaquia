import React from "react";
import RenderEsp from "./lang/esp";
import RenderPor from "./lang/por";
import RenderEng from "./lang/eng";

export default function Renderizar(props) {
  switch (props.Idioma) {
    case "Eng":
      return (
        <div>
          <RenderEng />
        </div>
      );
    case "Por":
      return (
        <div>
          <RenderPor />
        </div>
      );
    default:
      return (
        <div>
          <RenderEsp />
        </div>
      );
  }
}
