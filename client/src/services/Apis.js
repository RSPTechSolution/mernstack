import { apiRequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const registerfunc = async(data,header) => {
    return await apiRequest("POST", `${BASE_URL}/user/register`, data,header);
}

export const getUsers = async() => {
    return await apiRequest("GET", `${BASE_URL}/user/details`);
}

export const getSingleUser = async (id) => {
    return await apiRequest("GET", `${BASE_URL}/user/${id}`);
}