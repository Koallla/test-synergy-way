import React, { Component } from "react";
import ApiService from "../services/api_services";
import UserForm from "./Form/userForm";

const apiService = new ApiService();

export default class Users extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      id: "",
      users: [],
      groups: [],
      username: "",
      group: "",
      isOpenCreate: false,
      isOpenEdit: false,
    };
  }

  componentDidMount() {
    apiService.getUsers().then((users) => {
      this.setState({ users });
    });

    apiService.getGroups().then((groups) => {
      this.setState({ groups });
    });
  }

  getSelectOptions() {
    return this.state.groups.map((group, index) => (
      <option key={index} value={group.id}>
        {group.name}
      </option>
    ));
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { id, username, group } = this.state;

    if (typeof id === "number") {
      apiService
        .updateUser({
          id: id,
          username: username,
          group: group,
        })
        .then((res) => {
          alert(`User ${username} edited!`);
        })
        .catch(() => {
          alert("There was an error! Please re-check your form.");
        });
    } else {
      apiService
        .createUser({
          username: username,
          group: group,
        })
        .then(() => {
          alert(`User ${username} created!`);
        })
        .catch(() => {
          alert("There was an error! Please re-check your form.");
        });
    }

    this.handleToggle(id);
    this.handleClear();
  };

  handleDelete = (id) => {
    this.setState((state) => ({
      users: state.users.filter((users) => users.id !== id),
    }));
    apiService
      .deleteUser({
        id: id,
      })
      .then(() => {
        alert(`User with id: ${id} deleted!`);
      })
      .catch(() => {
        alert("There was an error! Please re-check your form.");
      });

    this.handleClear();
  };

  handleEdit = (id) => {
    this.handleToggle(id);
    this.setState({
      id: id,
    });
  };

  handleToggle = (id) => {
    if (typeof id === "number") {
      this.setState((state) => ({
        isOpenEdit: !state.isOpenEdit,
        isOpenCreate: false,
      }));
    } else {
      this.setState((state) => ({
        isOpenCreate: !state.isOpenCreate,
        isOpenEdit: false,
      }));
    }
  };

  handleClear = () => {
    this.setState({
      id: "",
      username: "",
      group: "",
    });
  };

  render() {
    const { users, username, group, isOpenCreate, isOpenEdit } = this.state;
    return (
      <div className="users--list">
        <p>Users page</p>
        <table className="table">
          <thead key="thead">
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Date of creating</th>
              <th>Group</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id} </td>
                <td>{user.username}</td>
                <td>{user.created}</td>
                <td>{user.group}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.handleEdit(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={this.handleToggle}>
          Add user
        </button>
        {isOpenCreate && (
          <UserForm
            title={"Create user"}
            username={username}
            group={group}
            selectOptions={this.getSelectOptions()}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        )}

        {isOpenEdit && (
          <UserForm
            title={"Edit user"}
            username={username}
            group={group}
            selectOptions={this.getSelectOptions()}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}
