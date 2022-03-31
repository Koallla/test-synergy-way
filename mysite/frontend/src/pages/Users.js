import React, { Component } from "react";
import ApiService from "../services/api_services";

const apiService = new ApiService();

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      users: [],
      groups: [],
      username: "",
      group: "",
    };
  }

  componentDidMount() {
    apiService.getUsers().then((users) => {
      console.log(users);
      this.setState({ users });
    });

    apiService.getGroupsNames().then((groups) => {
      console.log(groups);
      this.setState({ groups });
    });
  }

  getSelectOptions() {
    return this.state.groups.map((text, index) => (
      <option key={index} value={text}>
        {text}
      </option>
    ));
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleCreate() {
    // apiService
    //   .createUser({
    //     username: this.userName.value,
    //     group: this.group.value,
    //   })
    //   .then((result) => {
    //     alert("Customer created!");
    //   })
    //   .catch(() => {
    //     alert("There was an error! Please re-check your form.");
    //   });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { username, group } = this.state;

    console.log(username);
    console.log(group);
  };

  render() {
    const { users, username, group } = this.state;
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
                    // onClick={(e) => this.handleEdit(e, user.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    // onClick={(e) => this.handleDelete(e, user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn btn-primary"
          // onClick={this.handleCreate}
        >
          Add user
        </button>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>UesrName:</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <label>Group:</label>
            <select value={group} name="group" onChange={this.handleChange}>
              {this.getSelectOptions()}
            </select>

            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
