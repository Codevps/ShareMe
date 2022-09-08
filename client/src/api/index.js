import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("profile")
    )}`;
  }
  return req;
});

export const signIn = (formData) => API.post("/user/signIn", formData);
export const signUp = (formData) => API.post("/user/signUp", formData);
export const updateUserProfile = (id, updatedUserProfile) =>
  API.patch(`/user/${id}`, updatedUserProfile);

export const fetchProfile = (id) => API.get(`/user/profile/${id}`);
export const createProfile = (newProfile) =>
  API.profile("/user/profile", newProfile);
export const updateProfile = (id, updatedProfile) =>
  API.patch(`/user/profile/${id}`, updatedProfile);
