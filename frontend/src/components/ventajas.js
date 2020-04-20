import React from "react";

import Image from "react-bootstrap/Image";

import imgAcustico from "../img/ventajas/Acustico.png";
import imgAntiHongos from "../img/ventajas/AntiHongos.png";
import imgAntihumedad from "../img/ventajas/Antihumedad.png";
import imgAtermico from "../img/ventajas/Atermico.png";
import imgDecorativo from "../img/ventajas/Decorativo.png";
import imgFacilMantenimiento from "../img/ventajas/FacilMantenimiento.png";
import imgIncombustible from "../img/ventajas/Incombustible.png";
import imgRapidaColocacion from "../img/ventajas/RapidaColocacion.png";

export default function Ventajas(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <p>Ventajas en portuges</p>
        </div>
      );
    case "Eng":
      return (
        <div>
          <p>Ventajas en ingles</p>
        </div>
      );
    default:
      return (
        <div class="container pt-4" id="Ventajas">
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgAntihumedad}
                style={{ width: 40 }}
                alt="ANTIHUMEDAD"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>ANTI HUMEDAD</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgAtermico}
                style={{ width: 40 }}
                alt="ATÉRMICOS"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>ATÉRMICOS</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgIncombustible}
                style={{ width: 40 }}
                alt="INCOMBUSTIBLES"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>INCOMBUSTIBLES</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgAcustico}
                style={{ width: 40 }}
                alt="ACÚSTICOS"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>ACÚSTICOS</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgRapidaColocacion}
                style={{ width: 40 }}
                alt="RÁPIDA COLOCACIÓN"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>RÁPIDA COLOCACIÓN</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgAntiHongos}
                style={{ width: 40 }}
                alt="ANTIHONGOS"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>ANTI HONGOS</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgDecorativo}
                style={{ width: 40 }}
                alt="DECORATIVOS"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>DECORATIVOS</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgFacilMantenimiento}
                style={{ width: 40 }}
                alt="FÁCIL MANTENIMIENTO"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>FÁCIL MANTENIMIENTO</h2>
            </div>
          </div>
        </div>
      );
  }
}
