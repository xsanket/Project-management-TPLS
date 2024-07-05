import { axiosInstance } from "./axiosInstance"
import { axiosInstanceQuery } from "./axiosInstanceQuery";


export const createProject = async (payload) => {
    const response = await axiosInstance("post", "/api/createProject", payload);
    return response;
};


// export const fetchProjects = async (payload) => {
//     const response = await axiosInstance("get", `/api/fetchProjects`, payload);
//     return response;
// }


export const fetchProjects = async (page, query, sortBy) => {
    try {
      const params = {
        limit: 10,
        page,
        filter: query,
        sort: sortBy,
      };
      const response = await axiosInstanceQuery('get', '/api/fetchProjects', params);
      return response;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  };




export const updateProjects = async (page, query, sortBy) => {
    try {
      const params = {
        limit: 10,
        page,
        filter: query,
        sort: sortBy,
      };
      const response = await axiosInstanceQuery('put', '/api/updateStatus', params);
      return response;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  };
  


