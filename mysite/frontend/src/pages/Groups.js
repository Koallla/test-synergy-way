import React, { Component } from "react";
import GroupForm from "../components/Form/GroupForms/GroupForm";
import GroupsTable from "../components/Tables/GroupsTable/GroupsTable";
import ApiService from "../services/api_services";

const apiService = new ApiService();

export default class Groups extends Component {
  constructor(props) {
    super(props);
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
    const { id, groups, name, description } = this.state;

    const group = groups.find((group) => group.id === id);

    const groupUpdateData = {
      id: id,
      name: name,
      description: description,
    };

    if (typeof id === "number") {
      apiService
        .updateGroup({
          id: id,
          name: name,
          description: description,
        })
        .then(() => {
          const updaterGroup = { ...group, ...groupUpdateData };
          this.setState((state) => ({
            groups: state.groups.map((group) =>
              group.id === id ? { ...group, ...updaterGroup } : group
            ),
          }));
          alert(`Group with id:${id} edited!`);
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
        .then((response) => {
          const newGroup = response.data;
          const newGroupsArr = groups.concat([newGroup]);
          this.setState(() => ({
            groups: newGroupsArr,
          }));
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
      apiService
        .deleteGroup({
          id: id,
        })
        .then(() => {
          this.setState((state) => ({
            groups: state.groups.filter((groups) => groups.id !== id),
          }));
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

  handleCloseForm = () => {
    this.setState(() => ({
      isOpenEdit: false,
      isOpenCreate: false,
    }));
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
      <>
        <GroupsTable
          groups={groups}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          handleToggle={this.handleToggle}
        />
        {isOpenCreate && (
          <GroupForm
            title={"Create group form"}
            name={name}
            description={description}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleCloseForm={this.handleCloseForm}
          />
        )}

        {isOpenEdit && (
          <GroupForm
            title={"Edit group form"}
            name={name}
            description={description}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleCloseForm={this.handleCloseForm}
          />
        )}
      </>
    );
  }
}
