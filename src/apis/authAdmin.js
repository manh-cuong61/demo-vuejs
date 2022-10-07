import axios from "axios";

const API_URL = "https://stg.api.mariene.jp/api/v1/admin";

class AuthService {
  async login(user) {
    try {
      const res = await axios.post(`${API_URL}/login`, user);

      if (res.data.access_token) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }

      return res;
    } catch (err) {
      return err.response;
    }
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
