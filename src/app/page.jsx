"use client"

import Image from "next/image";
import Logo from "../../public/img/logo.png"
import Dulce from "../../public/img/1_38.png"
import Corona from "../../public/img/1_70.png"
import CoronaIconWhite from "../../public/img/crown_white.png"
import CoronaIconGrey from "../../public/img/crown_darkgrey.png"
import Arrow from "../../public/img/arrow.png"
import Garbage from "../../public/img/garbage.png"
import SearchGray from "../../public/img/search_gray.png"
import Check from "../../public/img/check.png"
import HomeIcon from "../../public/img/home.png"
import { useState } from "react";
import Cart from "../../public/img/shopping-cart_white.png"
import BillGray from "../../public/img/bill_gray.png"
import BillWhite from "../../public/img/bill_white.png"
import FilterGray from "../../public/img/filter_gray.png"
import FilterWhite from "../../public/img/filter_white.png"
import OrderGray from "../../public/img/order_gray.png"
import OrderWhite from "../../public/img/order_white.png"

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

  /* Visibilidad de Detalle */
  const [detalleHidden, setDetalleHidden] = useState(true)
  function hideDetalle() {
    setDetalleHidden(!detalleHidden)
  }

  /* Visibilidad del Orden */
  const [orderHidden, setOrderHidden] = useState(true)
  function hideOrder() {
    setFilterHidden(true)
    setOrderHidden(!orderHidden)
  }

  /* Orden Seleccionado */
  const [isOrderSelected, setIsOrderSelected] = useState("")
  function handleSelectOrder(order) {
    if (order === isOrderSelected) {
      setIsOrderSelected("")
    } else {
      setIsOrderSelected(order)
    }
  }

  /* Visibilidad del Filtro */
  const [filterHidden, setFilterHidden] = useState(true)
  function hideFilter() {
    setOrderHidden(true)
    setFilterHidden(!filterHidden)
  }

  /* Filtro Seleccionado */
  const [filterSelected, setFilterSelected] = useState({})
  function handleSelectFilter(filter) {
    setFilterSelected((prevFilters) => {

      if (prevFilters[filter]) {
        const updatedFilters = { ...prevFilters }
        delete updatedFilters[filter]
        return updatedFilters
      }

      return {
        ...prevFilters,
        [filter]: true,
      }
    })
  }

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className="w-[95%] h-[95vh] rounded-2xl border border-purpleCandy flex flex-col justify-between overflow-hidden">
        {/* HEADER Y PANEL CENTRAL */}
        <div className="w-full h-auto flex flex-col gap-2 lg:gap-5">
          {/* HEADER */}
          <div className="h-auto py-3 lg:py-4 px-3 lg:px-6 flex flex-row justify-between items-center bg-white border-b border-purpleCandy">

            {/* IMAGEN DE MARCA */}
            <button className="lg:hidden w-10 h-10 flex flex-col justify-center items-center rounded-md bg-pinkCandy shadow-darkShadowPink">
              <Image src={HomeIcon} className="lg:hidden w-6 object-contain"></Image>
            </button>
            <Image src={Logo} className="w-12 lg:w-16 object-contain" alt="The Candy Tower"></Image>


            {/* TITULO */}
            <h1 className="hidden lg:block balooBold text-purpleCandy lg:text-3xl">
              Mi Torre de Dulces
            </h1>

            {/* AGREGAR AL CARRITO */}
            <button className="hidden lg:block balooBold text-white h-10 px-4 rounded-md bg-pinkCandy shadow-darkShadowPink ">
              Agregar al Carrito
            </button>
            <button className="lg:hidden w-10 h-10 flex flex-col justify-center items-center rounded-md bg-pinkCandy shadow-darkShadowPink">
              <Image src={Cart} className="lg:hidden w-6 object-contain"></Image>
            </button>
          </div>

          {/* PANELES CENTRALES */}
          <div className="w-full px-3 lg:px-6 flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-0">

            {/* PANELES IZQUIERDA */}
            <div className="w-fit flex-col gap-4">
              {/* CONFIGURACION DE LA TORTA Y DETALLE */}
              <div className="flex flex-row lg:flex-col flex-wrap justify-center gap-4">

                {/* Forma */}
                <div className="w-fit flex flex-col items-center lg:items-start gap-1">
                  <h3 className="text-xs lg:text-sm font-Muli font-bold text-darkGrey">Estructura</h3>
                  <div className="flex flex-row gap-3">
                    <button className="h-8 lg:h-10 px-2 lg:px-4 rounded-md bg-pinkCandy shadow-darkShadowPink text-sm text-white font-Muli font-bold">Pirámide</button>
                  </div>
                </div>

                {/* Pisos */}
                <div className="w-fit flex flex-col items-center lg:items-start gap-1">
                  <h3 className="text-xs lg:text-sm font-Muli font-bold text-darkGrey">Cantidad de Pisos</h3>
                  <div className="flex flex-row gap-2 lg:gap-3">
                    <button
                      className={`w-8 lg:w-10 h-8 lg:h-10 rounded-md text-sm font-bold leading-none bg-white border ${floors != 2 ? "shadow-darkShadowGrey border-darkGrey text-darkGrey hover:bg-lightPinkCandy hover:border-pinkCandy" : "shadow-darkShadowLightGrey border-lightGrey text-lightGrey"} font-bold text-center duration-200`}
                      onClick={handleSubtractFloor}
                      {...(floors != 2 ? {} : { disabled: true })}
                    >-</button>
                    <div className="flex flex-col justify-center w-8 lg:w-10 h-8 lg:h-10 rounded-md text-sm text-white text-center font-bold bg-pinkCandy shadow-darkShadowPink"><span>{floors}</span></div>
                    <button
                      className={`w-8 lg:w-10 h-8 lg:h-10 rounded-md text-sm font-bold leading-none bg-white border ${floors != 6 ? "shadow-darkShadowGrey border-darkGrey text-darkGrey hover:bg-lightPinkCandy hover:border-pinkCandy" : "shadow-darkShadowLightGrey border-lightGrey text-lightGrey"} font-bold text-center duration-200`}
                      onClick={handleAddFloor}
                      {...(floors != 6 ? {} : { disabled: true })}
                    >+</button>
                  </div>
                </div>

                {/* BARRA DE NAVEGACION POR LA TORTA */}
                <div className="w-fit flex flex-col items-center lg:items-start gap-1">
                  <h3 className="text-xs lg:text-sm font-Muli font-bold text-darkGrey">Seleccionar Piso</h3>
                  <div className="w-full lg:w-[200px] flex flex-row flex-wrap gap-2 lg:gap-3">
                    {Array.from({ length: floors }).map((_, index) => {
                      const floor = index + 1
                      return (
                        <button
                          key={index}
                          className={`w-8 lg:w-10 h-8 lg:h-10 rounded-md text-sm font-bold leading-none border ${isFloorSelected === floor ? "bg-pinkCandy border-pinkCandy shadow-darkShadowPink text-white" : "bg-white border-darkGrey shadow-darkShadowGrey text-darkGrey hover:bg-lightPinkCandy hover:border-pinkCandy"} duration-200`}
                          onClick={() => handleSelectFloor(floor)}
                        >{floor}</button>
                      )
                    })}
                    <button
                      className={`flex flex-col items-center justify-center w-8 lg:w-10 h-8 lg:h-10 rounded-md text-sm font-bold leading-none border ${isFloorSelected === 0 ? "bg-pinkCandy border-pinkCandy shadow-darkShadowPink text-white" : "bg-white border-darkGrey shadow-darkShadowGrey text-darkGrey hover:border-pinkCandy hover:bg-lightPinkCandy"} duration-200`}
                      onClick={() => handleSelectFloor(0)}
                    >
                      <Image src={isFloorSelected === 0 ? CoronaIconWhite : CoronaIconGrey} className="w-6 lg:w-7 object-contain"></Image>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* DETALLE */}
            <div className="h-fit w-full lg:w-[400px] flex flex-col items-start lg:items-end gap-2">

              {/* HIDE/SHOW BOTON DETALLE */}
              <button
                className={`flex flex-row items-center h-8 lg:h-10 px-3 gap-2 rounded-md border ${detalleHidden ? "border-darkGrey text-darkGrey bg-white" : "text-white border-pinkCandy bg-pinkCandy shadow-darkShadowPink"}`}
                onClick={() => hideDetalle()}
              >
                <Image src={detalleHidden ? BillGray : BillWhite} className="w-5 h-5 object-contain"></Image>
                <span className="balooBold font-Baloo text-sm">Ver Detalle</span>
              </button>
              {
                !detalleHidden &&
                /* SI DETALLE ESTA VISIBLE RENDERIZAR EL "DETALLE" */
                <div className="h-fit w-full lg:w-[400px] flex flex-row items-center bg-white rounded-md border border-purpleCandy overflow-hidden">
                  <div className="w-full h-full">
                    <div className="w-full py-2 flex flex-col items-center justify-center bg-purpleCandy">
                      <h3 className="balooBold text-white">Detalle</h3>
                    </div>
                    <div className="w-full h-[150px] lg:h-[180px] flex flex-col items-center">
                      <div className="w-full h-full flex flex-col overflow-y-auto">
                        {
                          Object.keys(selectedCandies).length > 0
                            ? Object.entries(selectedCandies).map(([floor, candy]) => (
                              <div className="w-full flex flex-row items-center justify-between py-4 px-4 border-b border-lightGrey">
                                <div className="flex flex-row items-center">
                                  <Image src={Dulce} className="w-12"></Image>
                                  <h3 key={floor} className="font-Muli leading-none">{`Piso ${floor}`}</h3>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                  <h3 className="balooBold text-xl leading-none pt-[2px]">${`D${candy[0]}`}</h3>
                                  <button
                                    className="w-6 h-6 p-1 rounded-md flex flex-row justify-center items-center bg-[#FF5959] shadow-darkShadowRed hover:bg-[#E43434]"
                                    onClick={() => {
                                      const updatedCandies = { ...selectedCandies };
                                      delete updatedCandies[floor];
                                      setSelectedCandies(updatedCandies);
                                    }}
                                  >
                                    <Image src={Garbage} className="w-12"></Image>
                                  </button>
                                </div>
                              </div>

                            ))
                            : null
                        }
                        {
                          isCoronaSelected === 0 || isCoronaSelected > 0
                            ? <div className="w-full flex flex-row items-center justify-between py-4 px-4">
                              <div className="flex flex-row items-center">
                                <Image src={Corona} className="w-12"></Image>
                                <h3 className="font-Muli leading-none">Corona</h3>
                              </div>
                              <div className="flex flex-row items-center gap-2">
                                <h3 className="balooBold text-xl leading-none ">${isCoronaSelected}</h3>
                                <button
                                  className="w-6 h-6 p-1 rounded-md flex flex-row justify-center items-center bg-[#FF5959] shadow-darkShadowRed hover:bg-[#E43434]"
                                  onClick={() => setIsCoronaSelected("")}
                                >
                                  <Image src={Garbage} className="w-12"></Image>
                                </button>
                              </div>
                            </div>
                            : ""
                        }
                      </div>
                    </div>
                    <div className="w-full py-2 lg:py-4 flex flex-row justify-between items-center px-4 bg-lightPurpleCandy border-t border-purpleCandy">
                      <h3 className="font-Muli font-bold leading-none text-purpleCandy">Total</h3>
                      <div className="flex flex-row items-center gap-2">
                        <h3 className="balooBold text-xl leading-none pt-[2px] text-purpleCandy">${`${isCoronaSelected === 0 || isCoronaSelected > 0 ? `C:${isCoronaSelected},` : ""}${Object.keys(selectedCandies).length > 0 ? Object.entries(selectedCandies).map(([floor, candy]) => `${candy[0]}`).join(", ") : ""}`}</h3>
                        <button
                          className="w-6 h-6 p-1 rounded-md flex flex-row justify-center items-center bg-[#FF5959] shadow-darkShadowRed hover:bg-[#E43434]"
                          onClick={() => { setSelectedCandies({}), setIsCoronaSelected("") }}
                        >
                          <Image src={Garbage} className="w-12"></Image>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        {/* PANEL INFERIOR - CARRUSEL */}
        {
          isCorona
            ?
            /* CORONAS */
            <div className="w-full px-3 lg:px-6 flex flex-col gap-1">
              <h3 className="text-sm font-Muli font-bold text-darkGrey">Coronas</h3>
              <div className="w-full lg:w-fit flex flex-row items-center gap-2 mb-2">
                <form className="flex flex-row items-center gap-2">
                  <input
                    className="h-8 w-40 lg:w-80 border border-darkGrey rounded-md bg-white shadow-darkShadowGrey px-2 font-Muli text-darkGrey focus:bg-lightPinkCandy focus:border-pinkCandy outline-none"
                  ></input>
                  <button
                    type="submit"
                    className="h-8 w-8 flex flex-col justify-center items-center border border-darkGrey rounded-md bg-white shadow-darkShadowGrey duration-200 hover:bg-lightPinkCandy hover:border-pinkCandy"
                  >
                    <Image src={SearchGray} className="w-4"></Image>
                  </button>
                </form>
                <div className="relative flex flex-row">
                  <button
                    className={`h-8 w-8 lg:w-fit font-Muli rounded-md lg:px-3 border flex flex-col justify-center items-center overflow-hidden ${!orderHidden ? "bg-pinkCandy border-pinkCandy shadow-darkShadowPink text-white" : "bg-white border-darkGrey shadow-darkShadowGrey hover:border-pinkCandy hover:bg-lightPinkCandy"}`}
                    onClick={() => hideOrder()}
                  >
                    <Image src={orderHidden ? OrderGray : OrderWhite} className="lg:hidden w-4"></Image>
                    <h3 className="hidden lg:block font-Muli text-sm font-bold">Ordenar</h3>
                  </button>
                  {
                    !orderHidden &&
                    <div className="absolute right-0 bottom-full mb-2 w-[200px] h-fit p-4 bg-white border border-darkGrey rounded-md">
                      <div className="flex flex-col gap-2">
                        <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectOrder(1)}>
                          <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${isOrderSelected === 1 && "bg-pinkCandy"}`}></Image>
                          <h4 className="font-Muli pb-1">A - Z</h4>
                        </button>
                        <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectOrder(2)}>
                          <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${isOrderSelected === 2 && "bg-pinkCandy"}`}></Image>
                          <h4 className="font-Muli pb-1">Z - A</h4>
                        </button>
                        <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectOrder(3)}>
                          <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${isOrderSelected === 3 && "bg-pinkCandy"}`}></Image>
                          <h4 className="font-Muli pb-1">Mayor Precio</h4>
                        </button>
                        <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectOrder(4)}>
                          <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${isOrderSelected === 4 && "bg-pinkCandy"}`}></Image>
                          <h4 className="font-Muli pb-1">Menor Precio</h4>
                        </button>
                      </div>
                    </div>
                  }
                </div>
                <div className="relative">
                <button
                    className={`h-8 w-8 lg:w-fit font-Muli rounded-md lg:px-3 border flex flex-col justify-center items-center overflow-hidden ${!filterHidden ? "bg-pinkCandy border-pinkCandy shadow-darkShadowPink text-white" : "bg-white border-darkGrey shadow-darkShadowGrey hover:border-pinkCandy hover:bg-lightPinkCandy"}`}
                    onClick={() => hideFilter()}
                  >
                    <Image src={filterHidden ? FilterGray : FilterWhite} className="lg:hidden w-4"></Image>
                    <h3 className="hidden lg:block font-Muli text-sm font-bold">Filtrar</h3>
                  </button>
                  {
                    !filterHidden &&
                    <div className="absolute right-0 bottom-full mb-2 w-[250px] lg:w-[300px] h-fit p-4 bg-white border border-darkGrey rounded-md">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                          <h4 className="font-Muli font-bold">Marca</h4>
                          <div className="grid grid-cols-2">
                            <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectFilter("Pepito")}>
                              <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${filterSelected["Pepito"] && "bg-pinkCandy"}`}></Image>
                              <h4 className="font-Muli pb-1">Pepito</h4>
                            </button>
                            <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectFilter("Juancito")}>
                              <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${filterSelected["Juancito"] && "bg-pinkCandy"}`}></Image>
                              <h4 className="font-Muli pb-1">Juancito</h4>
                            </button>
                            <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectFilter("Mentitas")}>
                              <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${filterSelected["Mentitas"] && "bg-pinkCandy"}`}></Image>
                              <h4 className="font-Muli pb-1">Mentitas</h4>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>

              <div className="w-full flex flex-row gap-4 pb-2 mb-6 overflow-x-auto">
                {
                  coronas.map((e, index) => {
                    return (
                      <button
                        key={index}
                        className={`w-[100px] h-fit flex flex-col items-center flex-shrink-0 gap-2 rounded-md border overflow-hidden ${isCoronaSelected === index ? "bg-pinkCandy border-pinkCandy shadow-darkShadowPink text-white" : "bg-white border-darkGrey text-darkGrey"}`}
                        onClick={() => handleSelectCorona(index)}>
                        <div className={`w-[100px] h-[100px] flex flex-row border-b bg-white ${isCoronaSelected === index ? "border-pinkCandy" : "border-darkGrey"} duration-200`}>
                          <Image src={Corona} className="p-4"></Image>
                        </div>
                        <h4 className={`balooBold leading-none text-sm pb-1`}>"Mentitas"<br></br>Menta</h4>
                      </button>
                    )
                  })
                }
              </div>
            </div>
            :
            /* PISOS */
            <div className="w-full px-3 lg:px-6 flex flex-col gap-1">
              <h3 className="text-sm font-Muli font-bold text-darkGrey">Dulces</h3>
              <div className="w-full lg:w-fit flex flex-row items-center gap-2 mb-2">
                <form className="flex flex-row items-center gap-2">
                  <input
                    className="h-8 w-40 lg:w-80 border border-darkGrey rounded-md bg-white shadow-darkShadowGrey px-2 font-Muli text-darkGrey focus:bg-lightPinkCandy focus:border-pinkCandy outline-none"
                  ></input>
                  <button
                    type="submit"
                    className="h-8 w-8 flex flex-col justify-center items-center border border-darkGrey rounded-md bg-white shadow-darkShadowGrey duration-200 hover:bg-lightPinkCandy hover:border-pinkCandy"
                  >
                    <Image src={SearchGray} className="w-4"></Image>
                  </button>
                </form>
                <div className="relative flex flex-row">
                  <button
                    className={`h-8 w-8 lg:w-fit font-Muli rounded-md lg:px-3 border flex flex-col justify-center items-center overflow-hidden ${!orderHidden ? "bg-pinkCandy border-pinkCandy shadow-darkShadowPink text-white" : "bg-white border-darkGrey shadow-darkShadowGrey hover:border-pinkCandy hover:bg-lightPinkCandy"}`}
                    onClick={() => hideOrder()}
                  >
                    <Image src={orderHidden ? OrderGray : OrderWhite} className="lg:hidden w-4"></Image>
                    <h3 className="hidden lg:block font-Muli text-sm font-bold">Ordenar</h3>
                  </button>
                  {
                    !orderHidden &&
                    <div className="absolute right-0 bottom-full mb-2 w-[200px] h-fit p-4 bg-white border border-darkGrey rounded-md">
                      <div className="flex flex-col gap-2">
                        <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectOrder(1)}>
                          <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${isOrderSelected === 1 && "bg-pinkCandy"}`}></Image>
                          <h4 className="font-Muli pb-1">A - Z</h4>
                        </button>
                        <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectOrder(2)}>
                          <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${isOrderSelected === 2 && "bg-pinkCandy"}`}></Image>
                          <h4 className="font-Muli pb-1">Z - A</h4>
                        </button>
                        <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectOrder(3)}>
                          <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${isOrderSelected === 3 && "bg-pinkCandy"}`}></Image>
                          <h4 className="font-Muli pb-1">Mayor Precio</h4>
                        </button>
                        <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectOrder(4)}>
                          <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${isOrderSelected === 4 && "bg-pinkCandy"}`}></Image>
                          <h4 className="font-Muli pb-1">Menor Precio</h4>
                        </button>
                      </div>
                    </div>
                  }
                </div>
                <div className="relative">
                <button
                    className={`h-8 w-8 lg:w-fit font-Muli rounded-md lg:px-3 border flex flex-col justify-center items-center overflow-hidden ${!filterHidden ? "bg-pinkCandy border-pinkCandy shadow-darkShadowPink text-white" : "bg-white border-darkGrey shadow-darkShadowGrey hover:border-pinkCandy hover:bg-lightPinkCandy"}`}
                    onClick={() => hideFilter()}
                  >
                    <Image src={filterHidden ? FilterGray : FilterWhite} className="lg:hidden w-4"></Image>
                    <h3 className="hidden lg:block font-Muli text-sm font-bold">Filtrar</h3>
                  </button>
                  {
                    !filterHidden &&
                    <div className="absolute right-0 bottom-full mb-2 w-[250px] lg:w-[300px] h-fit p-4 bg-white border border-darkGrey rounded-md">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                          <h4 className="font-Muli font-bold">Marca</h4>
                          <div className="grid grid-cols-2">
                            <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectFilter("Pepito")}>
                              <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${filterSelected["Pepito"] && "bg-pinkCandy"}`}></Image>
                              <h4 className="font-Muli pb-1">Pepito</h4>
                            </button>
                            <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectFilter("Juancito")}>
                              <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${filterSelected["Juancito"] && "bg-pinkCandy"}`}></Image>
                              <h4 className="font-Muli pb-1">Juancito</h4>
                            </button>
                            <button className="flex flex-row gap-2 text-left items-center" onClick={() => handleSelectFilter("Mentitas")}>
                              <Image src={Check} className={`h-5 w-5 p-1 rounded-full border border-darkGrey ${filterSelected["Mentitas"] && "bg-pinkCandy"}`}></Image>
                              <h4 className="font-Muli pb-1">Mentitas</h4>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>

              <div className="w-full flex flex-row gap-4 pb-2 mb-6 overflow-x-auto">
                {
                  dulces.map((e, index) => {
                    return (
                      <button
                        key={index}
                        className={`w-[100px] h-fit flex flex-col items-center flex-shrink-0 gap-2 rounded-md border overflow-hidden ${selectedCandies[isFloorSelected] && selectedCandies[isFloorSelected][1] === index ? "bg-pinkCandy border-pinkCandy shadow-darkShadowPink text-white" : "bg-white border-darkGrey text-darkGrey"}`}
                        onClick={() => handleSelectCandy(e, index)}>
                        <div className={`w-[100px] h-[100px] flex flex-row border-b bg-white ${selectedCandies[isFloorSelected] && selectedCandies[isFloorSelected][1] === index ? "border-pinkCandy" : "border-darkGrey"} duration-200`}>
                          <Image src={Dulce} className="p-4"></Image>
                        </div>
                        <h4 className={`balooBold leading-none text-sm pb-1`}>"Mentitas"<br></br>Menta</h4>
                      </button>
                    )
                  })
                }
              </div>
            </div>
        }
      </div>
    </main>
  );
}
