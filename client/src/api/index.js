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
export const getUserProfile2 = (id) =>
  API.get(`/followers/followers/${id}`, getUserProfile2);

export const signIn = (formData) => API.post("/user/signIn", formData);
export const signUp = (formData) => API.post("/user/signUp", formData);
export const updateUserProfile = (id, updatedUserProfile) =>
  API.patch(`/user/${id}`, updatedUserProfile);
export const getUserProfile = (id) =>
  API.get(`/user/profile/${id}`, getUserProfile);
export const getUsers = () => API.get(`/user/`);
export const getUsers1 = () => API.get(`/profile/`);
export const getUsers2 = () => API.get(`/followers/`);

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
export const followOtherUser = (id) => API.patch(`/user/${id}/followOtherUser`);
export const followBackUser = (id) => API.patch(`/user/${id}/followBackUser`);

export const userChats = (id) => API.get(`/chat/${id}`);
export const findChat = (firstId, secondId) =>
  API.get(`/chat/find/${firstId}/${secondId}`);
export const createChat = (id) => API.post(`/chat`);

export const getMessages = (chatId) => API.get(`/chatMessages/${chatId}`);
export const addMessage = (data) => API.post(`/chatMessages`, data);
