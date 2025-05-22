//axios copy past
import axios from "axios";

const api = axios.create(
    {
    baseURL: import.meta.env.VITE_BACKEND_URI,
    headers: {
        "Content-Type" : "application/json",
    },
});

export default api