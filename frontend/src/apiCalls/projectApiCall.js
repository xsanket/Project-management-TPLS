import axios from "axios";
import { axiosInstance } from "./axiosInstance"
import { axiosInstanceQuery } from "./axiosInstanceQuery";


export const createProject = async (payload) => {
  const response = await axiosInstance("post", "/api/createProject", payload);
  return response;
};


export const fetchUpdatedProjects = async (payload) => {
    const response = await axiosInstance("get", `/api/fetchProjects`, payload);
    return response;
}


export const fetchProjects = async (page, query, sort) => {
  try {
    const params = {
      limit: 10,
      page,
      filter: query,
      sort: sort,
    };
    const response = await axiosInstanceQuery('get', '/api/fetchProjects', params);
    return response;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};






export const updateProjectStatus = async ({  value, id }) => {
  try {
    const response = await axios.put('/api/updateProjectStatus', {
      Status: value,
      id: id
    });
    return response.data;
  } catch (error) {
    console.error("Error updating projects:", error);
    throw error;
  }
};



// export const updateProjects = async (page, query, sortBy, value, id) => {
//   try {
//     const params = {
//       limit: 10,
//       page,
//       filter: query,
//       sort: sortBy,
//       Status: value,
//       id: id,
//     };
//     const response = await axiosInstanceQuery('put', '/api/updateStatus', params);
//     //console.log("update project here===>");
//     return response;
//   } catch (error) {
//     console.error("Error updating projects:", error);
//     throw error;
//   }
// };




