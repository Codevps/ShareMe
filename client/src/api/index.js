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

export const getUserProfile1 = (id) =>
  API.get(`/profile/profile/${id}`, getUserProfile1);

export const signIn = (formData) => API.post("/user/signIn", formData);
export const signUp = (formData) => API.post("/user/signUp", formData);
export const updateUserProfile = (id, updatedUserProfile) =>
  API.patch(`/user/${id}`, updatedUserProfile);
export const getUserProfile = (id) =>
  API.get(`/user/profile/${id}`, getUserProfile);
export const getUsers = () => API.get(`/user/`);
export const getUsers1 = () => API.get(`/profile/`);

export const fetchPosts = () => API.get(`/posts/`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const commentPost = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });
export const savePost = (id) => API.patch(`/user/${id}/savePost`);
export const registerPost = (id) => API.patch(`/user/${id}/registerPost`);
