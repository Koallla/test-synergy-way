import axios from "axios";
const API_URL = "http://localhost:8000";

export default class ApiService {
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
    const url = `${API_URL}/api/users/`;
    return axios.post(url, user);
  }

  createGroup(groupData) {
    const url = `${API_URL}/api/groups/`;
    return axios.post(url, groupData);
  }

  updateUser(user) {
    const url = `${API_URL}/api/users/${user.id}`;
    return axios.put(url, user);
  }

  updateGroup(group) {
    const url = `${API_URL}/api/groups/${group.id}`;
    return axios.put(url, group);
  }

  deleteUser(user) {
    const url = `${API_URL}/api/users/${user.id}`;
    return axios.delete(url);
  }

  deleteGroup(group) {
    const url = `${API_URL}/api/groups/${group.id}`;
    return axios.delete(url);
  }
}
