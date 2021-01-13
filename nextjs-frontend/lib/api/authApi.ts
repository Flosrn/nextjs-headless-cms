import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/local`;

export async function authHandler(credentials) {
  console.log("credentials : ", credentials);
  const { formType, email, password, firstName, lastName } = credentials;
  console.log("firstName : ", firstName);
  console.log("lastName : ", lastName);
  switch (formType) {
    case "signup":
      return axios.post(`${BASE_URL}/register`, {
        username: `${firstName}.${lastName}`,
        email,
        password,
      });
    case "signin":
      return axios.post(`${BASE_URL}`, {
        identifier: email,
        password,
      });
    default:
      return null;
  }
}

// Auth.form.error.confirmed
