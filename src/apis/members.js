import axios from "axios";
import headers from "./headers";

const API_URL = "https://stg.api.mariene.jp/api/v1/admin/member";

class Members {
  getAll(payload) {
    return axios.get(API_URL, {
      headers: headers(),
      params: payload,
    });
  }
  getDetail(id) {
    return axios.get(`${API_URL}/${id}`, {
      headers: headers(),
    });
  }
}

export default new Members();
