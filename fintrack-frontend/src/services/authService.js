import api from "../api/api";

export const loginUser = async (username, password) => {
  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  const response = await api.post("/auth/login", formData);

  return response.data;
};

export const registerUser = async (email, password) => {
  const response = await api.post("/auth/register", {
    email,
    password,
  });

  return response.data;
};