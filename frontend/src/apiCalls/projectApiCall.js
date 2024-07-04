import { axiosInstance } from "./axiosInstance"


export const createProject = async (payload) => {
    const response = await axiosInstance("post", "/api/createProject", payload);
    return response;
};


export const fetchProjects = async (payload) => {
    const response = await axiosInstance("get", `/api/fetchProjects`, payload);
    return response;
}

// export const fetchProjects = async (page, query, sortBy) => {
//     try {
//       const response = await axiosInstance("get", `/api/fetchProjects?limit=10&page=${page}&filter=${query}&sort=${sortBy}`, 
//       );
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//       throw error;
//     }
//   };



