import { axiosInstance } from "./axiosInstance"


export const createProject = async (payload) => {
    const response = await axiosInstance("post", "/api/createProject", payload);
    return response;
};


export const fetchProjects = async (payload) => {
    const response = await axiosInstance("get", "/api/fetchProjects", payload);
    return response;
}



