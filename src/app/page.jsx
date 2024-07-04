"use client"

import Image from "next/image";
import Logo from "../../public/img/logo.png"
import Dulce from "../../public/img/1_38.png"
import Corona from "../../public/img/1_70.png"
import { useState } from "react";

export default function Home() {

  /* Seleccion de CANTIDAD de Pisos */
  const [floors, setFloors] = useState(2)
  function handleAddFloor() {
    if (floors < 6) {
      setFloors(prevState => prevState + 1) /* En esta funcion se podria añadir la funcion de agregar el piso en 3D */
    }
  }
  function handleSubtractFloor() {
    if (floors > 2) {
      setFloors(prevState => prevState - 1) /* En esta funcion se podria añadir la funcion de restar el piso en 3D */
      setSelectedCandies(prevSelectedCandies => {
        const newState = { ...prevSelectedCandies }
        const keys = Object.keys(newState)

        if (keys.length > 0) {
          const lastKey = keys[keys.length - 1]
          delete newState[lastKey]
        }

        return newState
      })
    }
  }

  /* Seleccion de piso a EDITAR */
  const [isCorona, setIsCorona] = useState(false)
  const [isFloorSelected, setIsFloorSelected] = useState(1)
  function handleSelectFloor(floorSelected) {
    if (floorSelected === 0) {
      setIsCorona(true)
    } else {
      setIsCorona(false)
    }
    setIsFloorSelected(floorSelected)
  }

  /* Seleccion de Dulces */
  const dulces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const [selectedCandies, setSelectedCandies] = useState({})
  function handleSelectCandy(candy, index) {
    if (selectedCandies[isFloorSelected] && index === selectedCandies[isFloorSelected][1]) {
      setSelectedCandies(prevState => {
        const newState = { ...prevState }
        delete newState[isFloorSelected] // Elimina la entrada del piso seleccionado
        return newState
      })
    } else {
      setSelectedCandies(prevState => ({
        ...prevState,
        [isFloorSelected]: [candy, index]
      }))
    }
  }
  /* const [isCandySelected, setIsCandySelected] = useState()
  function handleSelectCandy(index) { En esta funcion se podria agregar la seleccion del dulce y agregar a cotizacion.
    if (index === isCandySelected) {
      setIsCandySelected("")
    } else {
      setIsCandySelected(index)
    }
  } */

  /* Seleccion de Coronas */
  const coronas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const [isCoronaSelected, setIsCoronaSelected] = useState()
  function handleSelectCorona(index) { /* En esta funcion se podria agregar la seleccion de la corona y agregar a cotizacion. */
    if (index === isCoronaSelected) {
      setIsCoronaSelected("")
    } else {
      setIsCoronaSelected(index)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center xl:justify-between pt-5 pb-10 px-5 xl:px-20 2xl:py-10 2xl:px-20 font-Muli">

      {/* IMAGEN DE MARCA */}
      <Image src={Logo} className="w-14 2xl:w-20" alt="The Candy Tower"></Image>

      {/* PANELES CENTRALES */}
      <div className="w-full flex flex-row justify-between xl:items-center 2xl:px-14">

        {/* BARRA DE NAVEGACION POR LA TORTA */}
        <div className="flex flex-col items-center gap-2 text-sm 2xl:text-lg">
          <h3 className="text-purpleCandy">Editar</h3>
          <div className="h-[170px] lg:h-[225px] 2xl:h-fit overflow-y-auto flex flex-col gap-2">
            <button
              className={`pb-4 pt-3 w-28 rounded-2xl bg-white font-bold text-center border ${isFloorSelected === 0 ? "shadow-pinkInner border-pinkCandy text-pinkCandy" : "shadow-greyInner border-gray-400 text-gray-400"} duration-200`}
              onClick={() => handleSelectFloor(0)}
            >Corona</button>
            {Array.from({ length: floors }).map((_, index) => {
              const floor = index + 1
              return (
                <button
                  key={index}
                  className={`pb-4 pt-3 w-28 rounded-2xl bg-white font-bold text-center border ${isFloorSelected === floor ? "shadow-pinkInner border-pinkCandy text-pinkCandy" : "shadow-greyInner border-gray-400 text-gray-400"} duration-200`}
                  onClick={() => handleSelectFloor(floor)}
                >{floor}{floor === 1 || floor === 3 ? "er" : floor === 2 ? "do" : "to"} Piso</button>
              )
            })}
          </div>
        </div>

        {/* CONFIGURACION DE LA TORTA Y DETALLE */}
        <div className="flex flex-col gap-2 lg:gap-6 items-center justify-center">

          {/* Forma */}
          <div className="hidden lg:flex lg:flex-col lg:items-center gap-2 text-sm 2xl:text-lg">
            <h3 className="text-purpleCandy">Forma</h3>
            <div className="flex flex-row gap-5">
              <button className="pb-4 pt-3 w-28 rounded-2xl bg-white shadow-pinkInner border border-pinkCandy font-bold text-pinkCandy text-center">Escalada</button>
            </div>
          </div>

          {/* Pisos */}
          <div className="flex flex-col items-center gap-2 text-sm 2xl:text-lg">
            <h3 className="text-purpleCandy">Pisos</h3>
            <div className="flex flex-row gap-2">
              <button
                className={`pb-4 pt-3 w-16 rounded-2xl text-xl 2xl:text-2xl leading-none bg-white border ${floors != 2 ? "shadow-pinkInner border-pinkCandy text-pinkCandy" : "shadow-greyInner border-gray-400 text-gray-400"} font-bold text-center duration-200`}
                onClick={handleSubtractFloor}
                {...(floors != 2 ? {} : { disabled: true })}
              >-</button>
              <h3 className="pb-4 pt-3 w-16 rounded-2xl bg-white shadow-pinkInner border border-pinkCandy font-bold text-pinkCandy text-center">{floors}</h3>
              <button
                className={`pb-4 pt-3 w-16 rounded-2xl text-xl 2xl:text-2xl leading-none bg-white border ${floors != 6 ? "shadow-pinkInner border-pinkCandy text-pinkCandy" : "shadow-greyInner border-gray-400 text-gray-400"} font-bold text-center duration-200`}
                onClick={handleAddFloor}
                {...(floors != 6 ? {} : { disabled: true })}
              >+</button>
            </div>
          </div>

          {/* Detalle */}
          <div className="w-full flex flex-col items-center gap-3">
            <div className="w-full flex flex-col items-center gap-3 py-4 px-6 bg-white rounded-3xl shadow-pinkInner border border-pinkCandy">
              <h3 className="font-bold text-purpleCandy">Total</h3>
              <div className="h-[1px] w-full bg-purpleCandy"></div>
              <h2 className="text-xl font-bold text-purpleCandy">{`${isCoronaSelected === 0 || isCoronaSelected > 0 ? `C:${isCoronaSelected},` : "-,"}${Object.keys(selectedCandies).length > 0 ? Object.entries(selectedCandies).map(([floor, candy]) => `F${floor}:D${candy[0]}`).join(", ") : ""}`}</h2>
            </div>
            <button className="pb-2 pt-1 px-4 bg-pinkCandy rounded-full text-white font-bold text-sm 2xl:text-base">Agregar al Carrito</button>
          </div>
        </div>
      </div>

      {/* PANEL INFERIOR - CARRUSEL */}
      {
        isCorona
          ?
          <div className="w-full absolute xl:static bottom-4 px-4 xl:p-0 flex flex-col">
            <h3 className="text-purpleCandy text-sm 2xl:text-lg text-center">Coronas:</h3>
            <div className="w-full overflow-x-auto flex flex-row gap-4 text-sm py-2">
              {
                coronas.map((e, index) => {
                  return (
                    <button
                      key={index}
                      className="w-[100px] h-fit flex flex-col items-center flex-shrink-0 gap-2"
                      onClick={() => handleSelectCorona(index)}>
                      <div className={`w-full h-[100px] flex flex-row rounded-3xl bg-white ${isCoronaSelected === index ? "shadow-pinkInner border border-pinkCandy" : "shadow-greyInner border border-gray-400"} duration-200`}>
                        <Image src={Corona} className="p-4"></Image>
                      </div>
                      <div className="leading-4">
                        <h3 className={`font-bold text-center ${isCoronaSelected === index ? "text-pinkCandy" : "text-gray-400"} duration-200`}>CORONA</h3>
                        <p className={`text-center ${isCoronaSelected === index ? "text-purpleCandy" : "text-gray-400"} duration-200`}>Dulce</p>
                      </div>
                    </button>
                  )
                })
              }
            </div>
          </div>
          :
          <div className="w-full absolute xl:static bottom-4 px-4 xl:p-0 flex flex-col">
            <h3 className="text-purpleCandy text-sm 2xl:text-lg text-center">Dulces y Golosinas</h3>
            <div className="w-full overflow-x-auto flex flex-row gap-4 text-sm py-2">
              {
                dulces.map((e, index) => {
                  return (
                    <button
                      key={index}
                      className="w-[100px] h-fit flex flex-col items-center flex-shrink-0 gap-2"
                      onClick={() => handleSelectCandy(e, index)}>
                      <div className={`w-full h-[100px] flex flex-row rounded-3xl bg-white ${selectedCandies[isFloorSelected] && selectedCandies[isFloorSelected][1] === index ? "shadow-pinkInner border border-pinkCandy" : "shadow-greyInner border border-gray-400"} duration-200`}>
                        <Image src={Dulce} className="p-4"></Image>
                      </div>
                      <div className="leading-4">
                        <h3 className={`font-bold text-center ${selectedCandies[isFloorSelected] && selectedCandies[isFloorSelected][1] === index ? "text-pinkCandy" : "text-gray-400"} duration-200`}>MENTITAS</h3>
                        <p className={`text-center ${selectedCandies[isFloorSelected] && selectedCandies[isFloorSelected][1] === index ? "text-purpleCandy" : "text-gray-400"} duration-200`}>Menta</p>
                      </div>
                    </button>
                  )
                })
              }
            </div>
          </div>
      }

    </main>
  );
}
