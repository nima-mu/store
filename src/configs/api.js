import axios from "axios";

let api = axios.create({
  baseURL: import.meta.env.VITE_PHONES_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
