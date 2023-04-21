import axios from "axios";

const campaignAPI = axios.create({
  baseURL: "http://localhost:4000",
});

export const getCampaign = async () => {
  const res = await campaignAPI.get("/pruebas");
  return res.data;
};

export const createCampaign = (campaign) => {
  campaignAPI.post("/pruebas", campaign);
};

export const deleteCampaign = (id) => {
  campaignAPI.delete(`pruebas/${id}`);
};
