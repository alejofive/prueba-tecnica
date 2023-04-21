import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCampaign } from "../api/CampaignAPI";
import { useNavigate } from "react-router-dom";

const Crear = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const addCampañaMutate = useMutation({
    mutationFn: createCampaign,
    onSuccess: () => {
      console.log("campaign added");
      queryClient.invalidateQueries("campaign");
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);
    addCampañaMutate.mutate(product);
  };

  return (
    <section className="bg-blue-500 h-screen flex justify-end">
      <div className="bg-white w-[1200px] h-screen rounded-s-3xl px-10 py-10">
        <div className="flex">
          <img src="/img/icon3.png" alt="" />
          <h1 className="font-bold ml-5">Nombre de campaña</h1>
        </div>

        <section className="mt-10 ">
          <h3 className="font-bold text-gray-500 border-b-2 pb-2">
            Segmentación
          </h3>
          <form
            action=""
            method="post"
            onSubmit={handleSubmit}
            className="mt-4"
          >
            <div className="grid grid-cols-6 gap-4">
              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  pais
                </label>
                <select
                  name="pais"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                >
                  <option value="Argentina">Argentina</option>
                  <option value="España">España</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Colombia">Colombia</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Bandera
                </label>
                <select
                  name="bandera"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                >
                  <option value="JUMBO - AR">JUMBO - AR</option>
                  <option value="JUMBO - ES">JUMBO - ES</option>
                  <option value="JUMBO - VE">JUMBO - VE</option>
                  <option value="JUMBO - CO">JUMBO - CO</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Zona
                </label>
                <select
                  name="zona"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                >
                  <option value="JUMBO - AR">Zona 01 - Argentina</option>
                  <option value="JUMBO - ES">Zona 02 - España</option>
                  <option value="JUMBO - VE">Zona 03 - Venenezuela</option>
                  <option value="JUMBO - CO">Zona 04 - Colombia</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Locales
                </label>
                <select
                  name="locales"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                >
                  <option value="S504, S502, S504, S504, S505, S506">
                    S504, S502, S504, S504, S505, S506
                  </option>
                  <option value="S505, S502, S504, S504, S505, S506">
                    S505, S502, S504, S504, S505, S506
                  </option>
                  <option value="S507, S502, S504, S504, S505, S506">
                    S507, S502, S504, S504, S505, S506
                  </option>
                  <option value="S5008, S502, S504, S504, S505, S506">
                    S5008, S502, S504, S504, S505, S506
                  </option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Sección
                </label>
                <select
                  name="seccion"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                >
                  <option value="26 - Botillería / Gaseosas">
                    26 - Botillería / Gaseosas
                  </option>
                  <option value="JUMBO - ES">30 - Botillería / Vino</option>
                  <option value="JUMBO - VE">18 - Bolsa / Maiz</option>
                  <option value="JUMBO - CO">Zona 04 - Bolsa / Cafe</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Estado
                </label>
                <select
                  name="estado"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                >
                  <option value="Creada">Creada</option>
                  <option value="Activada">Activada</option>
                  <option value="Pendiente Activación">
                    Pendiente Activación
                  </option>
                  <option value="Desactivada">Desactivada</option>
                </select>
              </div>

              <h3 className="font-bold text-gray-500 border-b-2 pb-2 col-span-6">
                Datos Generales
              </h3>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold" htmlFor="">
                  Nombre de la Campaña
                </label>
                <input
                  className="px-6 py-2.5 border border-zinc-800 rounded-lg w-full"
                  type="text"
                  placeholder="Nombre de la Campaña"
                  name="nombre"
                  required
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  tipo de campaña
                </label>
                <select
                  name="tipo"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                >
                  <option value="Jumbo Mensual">Jumbo Mensual</option>
                  <option value="FDM">FDM</option>
                  <option value="Local">Local</option>
                  <option value="Semanal">Semanal</option>
                  <option value="Especiales">Especiales</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Canal
                </label>
                <select
                  name="canal"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                >
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Físico">Físico</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold" htmlFor="">
                  Fecha de vigencia
                </label>
                <input
                  className="px-6 py-2.5 border border-zinc-800 rounded-lg w-full"
                  type="month"
                  placeholder="Nombre de la Campaña"
                  name="fecha"
                  required
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold" htmlFor="">
                  Fecha de vigencia
                </label>
                <input
                  className="px-6 py-2.5 border border-zinc-800 rounded-lg w-full"
                  type="month"
                  placeholder="Nombre de la Campaña"
                  name="fecha2"
                  required
                />
              </div>

              <div className="col-span-6 mt-10">
                <button className="bg-blue-700 px-7 py-2 text-white font-semibold text-lg flex items-center rounded-lg">
                  <img src="/img/guardar.png" alt="" className="mr-2" />
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Crear;
