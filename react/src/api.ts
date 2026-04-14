import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// GET /api/data
export const getData = async () => {
  const response = await api.get("/data");
  return response.data;
};

// POST /api/data
export const postData = async (payload: any) => {
  const response = await api.post("/data", payload);
  return response.data;
};

export default api;
