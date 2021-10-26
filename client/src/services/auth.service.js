import axios from "axios";
const API_URL = "http://localhost:5000/api/user";

class AuthService {
  getUserProfile(_id) {
    return axios.get("/api/user/userProfile/" + _id);
  }

  login(email, password) {
    return axios.post("/api/user/login", {
      email,
      password,
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(email, password) {
    return axios.post("/api/user/register", {
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  googleLogin(access_token) {
    return axios.post("/api/user/google/token", {
      access_token,
    });
  }

  facebookLogin(access_token) {
    return axios.post("/api/user/facebook/token", {
      access_token,
    });
  }
}

export default new AuthService();
