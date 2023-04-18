import React, { useState } from "react";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPruebas } from "../api/pruebaAPI";

const Table = () => {
  const {
    isLoading,
    data: pruebas,
    isError,
    error,
  } = useQuery({
    queryKey: ["pruebas"],
    queryFn: getPruebas,
    select: (pruebas) => pruebas.sort((a, b) => b.id - a.id),
  });

  //filter

  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const Filter = () => {
    let results = pruebas.sort((a, b) => (a.id < b.id ? 1 : -1));
    results = results.filter((pruebas) =>
      pruebas.nombre.toLowerCase().includes(search.toLowerCase())
    );

    return results;
  };

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error :{error.message}</div>;

  return (
    <section className="bg-white mt-10 pt-8 px-4">
      <div className="w-full flex items-center justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={searcher}
            className="border pl-12 py-1 rounded-lg"
          />
          <img
            src="/img/buscar.png"
            alt=""
            className="w-[24px] h-[24px] object-contain absolute top-1 left-3"
          />
        </div>
      </div>

      <section className="mt-5">
        {/* head */}
        <div className="flex items-center border-b-2">
          <div className="flex items-center w-[220px] h-[56px]">
            <h2 className="font-bold">Nombre de campaña</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
          <div className="flex items-center w-[140px] h-[56px]">
            <h2 className="font-bold">Tipo</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
          <div className="flex items-center w-[220px] h-[56px]">
            <h2 className="font-bold">Fecha vigencia</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
          <div className="flex items-center w-[120px] h-[56px]">
            <h2 className="font-bold">canal</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
          <div className="flex items-center w-[160px] h-[56px]">
            <h2 className="font-bold">Prom. vinculadas</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
          <div className="flex items-center w-[120px] h-[56px]">
            <h2 className="font-bold">Bandera</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
          <div className="flex items-center w-[120px] h-[56px]">
            <h2 className="font-bold">Estado</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
        </div>
        {/* table */}
        <div>
          {Filter().map((prueba) => {
            return (
              <div className="flex items-center border-b-2 py-4">
                <div className="w-[220px] ">
                  <h3>{prueba.nombre}</h3>
                </div>
                <div className="w-[140px] ">
                  <h3>{prueba.tipo}</h3>
                </div>
                <div className="w-[220px] ">
                  <p>
                    {prueba.fecha} a {prueba.fecha2}
                  </p>
                </div>
                <div className="w-[120px] ">
                  <h3>{prueba.canal}</h3>
                </div>
                <div className="w-[160px] ">
                  <p>{prueba.vinculadas}</p>
                </div>
                <div className="w-[120px] ">
                  <h3>{prueba.bandera}</h3>
                </div>
                <div className="w-[182px] ">
                  <span
                    className={`estado 
                ${prueba.estado === "Creada" && "creada"}
                ${prueba.estado === "Activada" && "activada"} 
                ${prueba.estado === "Pendiente Activación" && "pendiente"}
                ${prueba.estado === "Desactivada" && "desactivada"}
                `}
                  >
                    {prueba.estado}
                  </span>
                </div>

                <div className="w-[100px] flex">
                  <a href="" className="mr-4">
                    <img src="/img/IconButton1.png" alt="" />
                  </a>
                  <a href="" className="">
                    <img src="/img/IconButton2.png" alt="" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        {/* footer */}
        <div className="border-b-2  py-4 flex justify-end">
          <div className="mr-3">
            <p>Rows per page : 10</p>
          </div>
          <div className="mr-3">
            <p>1-5 of 13</p>
          </div>
          <div>
            <button>
              <img src="/img/Left.png" alt="" />
            </button>
            <button>
              <img src="/img/r.png" alt="" />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Table;
