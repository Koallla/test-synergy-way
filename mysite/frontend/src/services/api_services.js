import axios from "axios";
const API_URL = "http://localhost:8000";

export default class ApiService {
  // constructor() {}

  getUsers() {
    const url = `${API_URL}/api/users/`;
    return axios.get(url).then((response) => response.data);
  }

  getGroups() {
    const url = `${API_URL}/api/groups/`;
    return axios.get(url).then((response) => response.data);
  }

  getGroupsNames() {
    const url = `${API_URL}/api/groups/`;
    return axios
      .get(url)
      .then((response) => response.data.map((el) => el.name));
  }

  createUser(user) {
    const url = `${API_URL}/api/customers/`;
    return axios.post(url, user);
  }

  updateCustomer(customer) {
    const url = `${API_URL}/api/customers/${customer.pk}`;
    return axios.put(url, customer);
  }

  deleteCustomer(customer) {
    const url = `${API_URL}/api/customers/${customer.pk}`;
    return axios.delete(url);
  }
}
