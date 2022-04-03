import styles from "./users.module.css";

const UsersTable = ({ users, handleEdit, handleDelete, handleToggle }) => {
  return (
    <div className="users--list">
      <h2>Users page</h2>
      <table className="table">
        <thead key="thead">
          <tr className={styles.titles}>
            <th>id</th>
            <th>Name</th>
            <th>Date of creating</th>
            <th>Group</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={styles.titles}>
              <td>{user.id} </td>
              <td>{user.username}</td>
              <td>{user.created}</td>
              <td>{user.group}</td>
              <td className={styles.button}>
                <div className="btn-group mr-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={handleToggle}>
        Add user
      </button>
    </div>
  );
};

export default UsersTable;
