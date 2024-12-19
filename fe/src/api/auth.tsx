import { UUID } from "crypto";
import apiRequest from "./requests";
import { Customer } from "./customers";
import { plainToInstance } from 'class-transformer';

export function getCurrentUsername() {
  return "A";
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