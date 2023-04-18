import axios from "axios";

const pruebaAPI = axios.create({
  baseURL: "http://localhost:4000",
});

export const getPruebas = async () => {
  const res = await pruebaAPI.get("/pruebas");
  return res.data;
};

export const createCampaña = (prueba) => {
  pruebaAPI.post("/pruebas", prueba);
};
