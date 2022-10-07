import axios from "axios";
import headers from "./headers";

const API_URL = "https://stg.api.mariene.jp/api/v1/admin/notification";

class Notifications {
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
  update(payload) {
    return axios.put(`${API_URL}/${payload.notification_id}`, payload, {
      headers: headers(),
    });
  }
  store(payload) {
    return axios.post(API_URL, payload, {
      headers: headers(),
    });
  }
  delete(id) {
    return axios.delete(`${API_URL}/${id}`, {
      headers: headers(),
    });
  }
}

export default new Notifications();
