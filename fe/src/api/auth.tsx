import apiRequest from "./requests";
import { Customer } from "./customers";
import Cookies from "js-cookie";

export async function getCurrentUser() {
  const uuid = Cookies.get("UUID");
  if (uuid) {
    const response = await apiRequest(
      "GET", 
      "users",
      uuid,
      ""
    );

    if (response?.status === 200) {
      const data = await response.json();
      return {message: "Signed in!", user: data as Customer};
    }

  }
  return {message: "Not signed in!"};
}

export function getCurrentAdminUsername() {
  return "Admin";
}

export async function login(email: string, password: string) {
  const response = await apiRequest(
    "POST", 
    "auth",
    "login",
    {
      email: email,
      password: password
    }
  );

  if (response != null && response.status == 200) {
    const data = await response.json();
    return {message: "Login successful!", user: data["user"] as Customer};
  } else {
    return {message: "Login failed!"};
  }
}

export async function register(username: string, email: string, 
  password: string, confirm_password: string) {
  if (password !== confirm_password) {
    return {message: "Passwords do not match!"}; 
  }

  const response = await apiRequest(
    "POST",
    "auth",
    "register",
    {
      username: username,
      password: password,
      email: email
    }
  );

  if (response != null && response.status == 201) {
    return {message: "Register successful!"};
  } else {
    return {message: "Register failed!"};
  }
}