import React, { Component } from "react";
import GroupForm from "./Form/groupForm";
import ApiService from "../services/api_services";

const apiService = new ApiService();

export default class Groups extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      id: "",
      groups: [],
      users: [],
      isOpenCreate: false,
      isOpenEdit: false,
      name: "",
      description: "",
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, description } = this.state;
    if (typeof id === "number") {
      apiService
        .updateGroup({
          id: id,
          name: name,
          description: description,
        })
        .then((res) => {
          alert(`Group ${name} edited!`);
        })
        .catch(() => {
          alert("There was an error! Please re-check your form.");
        });
    } else {
      apiService
        .createGroup({
          name: name,
          description: description,
        })
        .then(() => {
          alert(`Group ${name} created!`);
        })
        .catch(() => {
          alert("There was an error! Please re-check your form.");
        });
    }

    this.handleToggle(id);
    this.handleClear();
  };

  handleDelete = (id) => {
    const { users } = this.state;
    const usedGroups = users.map((user) => user.group);
    if (usedGroups.includes(id)) {
      alert("User is assigned to this group!");
    } else {
      this.setState((state) => ({
        groups: state.groups.filter((groups) => groups.id !== id),
      }));
      apiService
        .deleteGroup({
          id: id,
        })
        .then(() => {
          alert(`Group with id: ${id} deleted!`);
        })
        .catch(() => {
          alert("There was an error! Please re-check your form.");
        });
    }

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
      name: "",
      description: "",
    });
  };

  render() {
    const { groups, isOpenCreate, isOpenEdit, name, description } = this.state;
    return (
      <div className="groups--list">
        <table className="table">
          <thead key="thead">
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr key={group.id}>
                <td>{group.id} </td>
                <td>{group.name}</td>
                <td>{group.description}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.handleEdit(group.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => this.handleDelete(group.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={this.handleToggle}>
          Add group
        </button>

        {isOpenCreate && (
          <GroupForm
            title={"Create group"}
            name={name}
            description={description}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        )}

        {isOpenEdit && (
          <GroupForm
            title={"Edit group"}
            name={name}
            description={description}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}
