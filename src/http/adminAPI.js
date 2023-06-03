import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (name, password) => {
  const {data} = await $host.post("api/admin/registration", {name, password});
  localStorage.setItem("token", data.token);
  return jwt_decode(data);
}

export const login = async (name, password) => {
  const {data} = await $host.post("api/admin/login", {name, password});
  localStorage.setItem("token", data.token);
  return jwt_decode(data);
}

export const check = async () => {
  const {data} = await $authHost.get("api/admin/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data);
}