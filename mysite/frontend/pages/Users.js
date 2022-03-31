import React, { Component } from 'react';
import ApiService from '../services/api_services';

const apiService = new ApiService();

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    apiService.getUsers().then(users => {
      this.setState({ users });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="users--list">
        <p>kasjdljasldj</p>
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
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id} </td>
                <td>{user.username}</td>
                <td>{user.created}</td>
                <td>{user.group}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    // onClick={(e) => this.handleEdit(e, user.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
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
          // onClick={this.nextPage}
        >
          Add user
        </button>
      </div>
    );
  }
}
