import { axiosInstance } from "./axiosInstance"


export const createProject = async (payload) => {
    const response = await axiosInstance("post", "/api/createProject", payload);
    return response;
};



