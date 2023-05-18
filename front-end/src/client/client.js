import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:5000",

    headers: {
        Accept: "application/json",
        // authorization:`Bearer ${token}`
    }
})