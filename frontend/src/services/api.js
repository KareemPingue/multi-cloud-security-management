import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:5000/api", // Backend API base URL
});

export default api;