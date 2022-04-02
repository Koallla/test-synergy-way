import React, { Component } from "react";
import ApiService from "../services/api_services";
import UserForm from "../components/Form/UserForm";
import UsersTable from "../components/Tables/UsersTable/UsersTable";

const apiService = new ApiService();

export default class Users extends Component {
  constructor(props) {
    super(props);
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

    const { id, users, username, group } = this.state;

    if (typeof id === "number") {
      const user = users.find((user) => user.id === id);
      const userUpdateData = {
        id: id,
        username: username,
        group: group,
      };

      apiService
        .updateUser(userUpdateData)
        .then(() => {
          alert(`User with id: ${id} edited!`);
          const updaterUser = { ...user, ...userUpdateData };
          this.setState((state) => ({
            users: state.users.map((user) =>
              user.id === id ? { ...user, ...updaterUser } : user
            ),
          }));
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
    apiService
      .deleteUser({
        id: id,
      })
      .then(() => {
        alert(`User with id: ${id} deleted!`);
        this.setState((state) => ({
          users: state.users.filter((users) => users.id !== id),
        }));
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
      <>
        <UsersTable
          users={users}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          handleToggle={this.handleToggle}
        />
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
      </>
    );
  }
}
