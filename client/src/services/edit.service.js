import axios from "axios";
const API_URL = "http://localhost:5000/api";

class EditService {
  userEdit(_id, gender) {
    return axios.put("/api/user/edit", {
      _id,
      gender,
    });
  }
}

export default new EditService();
