import React, { Component } from 'react';

export default class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    fetch('api/groups/')
      .then(groups => {
        return groups.json();
      })
      .then(groups => {
        this.setState({ groups });
      });
  }

  render() {
    const { groups } = this.state;
    return (
      <div className="users--list">
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
            {groups.map(group => (
              <tr key={group.id}>
                <td>{group.id} </td>
                <td>{group.name}</td>
                <td>{group.description}</td>
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
          Add group
        </button>
      </div>
    );
  }
}
