import React from "react";

import Image from "react-bootstrap/Image";

import imgAcustico from "../../img/Ventajas/Acustico.png";
import imgAntiHongos from "../../img/Ventajas/AntiHongos.png";
import imgAntihumedad from "../../img/Ventajas/Antihumedad.png";
import imgAtermico from "../../img/Ventajas/Atermico.png";
import imgDecorativo from "../../img/Ventajas/Decorativo.png";
import imgFacilMantenimiento from "../../img/Ventajas/FacilMantenimiento.png";
import imgIncombustible from "../../img/Ventajas/Incombustible.png";
import imgRapidaColocacion from "../../img/Ventajas/RapidaColocacion.png";

export default function Ventajas(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div class="container pt-4" id="Ventajas">
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgAntihumedad}
                style={{ width: 40 }}
                alt="ANTI-HUMIDADE"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>ANTI-HUMIDADE</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgAtermico}
                style={{ width: 40 }}
                alt="ATÉRICA"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>ATÉRICA</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgIncombustible}
                style={{ width: 40 }}
                alt="FUELS"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>FUELS</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgAcustico}
                style={{ width: 40 }}
                alt="ACOUSTICS"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>ACOUSTICS</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgRapidaColocacion}
                style={{ width: 40 }}
                alt="INSTALAÇÃO RÁPIDA"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>INSTALAÇÃO RÁPIDA</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-1">
              <Image
                src={imgAntiHongos}
                style={{ width: 40 }}
                alt="ANTI-FUNGUS"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>ANTI-FUNGUS</h2>
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
                alt="FÁCIL SERVICAMENTO"
                align="right"
              />
            </div>
            <div class="col-4">
              <h2>FÁCIL SERVICAMENTO</h2>
            </div>
          </div>
        </div>
      );
    case "Eng":
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
              <h2>ANTI-HUMIDITY</h2>
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
              <h2>NON-THERMAL</h2>
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
              <h2>FIRE-RESISTANT</h2>
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
              <h2>ACOUSTIC</h2>
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
              <h2>QUICK INSTALLATION</h2>
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
              <h2>ANTI FUNGUS</h2>
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
              <h2>DECORATIVES</h2>
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
              <h2>EASY MAINTENANCE</h2>
            </div>
          </div>
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
