import { axiosInstance } from "./axiosInstance.js";


export const userLogin = async (payload) => {
    const response = await axiosInstance("post", "/api/user-login", payload);
    return response;
}

export const userRegistration = async (payload) => {
    const response = await axiosInstance("post", "/api/user-registration", payload);
    return response;
}