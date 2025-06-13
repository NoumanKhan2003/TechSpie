import axios from "axios";

const googleApi = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/auth`,
});
export const googleAuth = (code) => api.get(`/google?code=${code}`);
