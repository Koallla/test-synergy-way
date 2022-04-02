import styles from "./groups.module.css";

const GroupTable = ({ groups, handleEdit, handleDelete, handleToggle }) => {
  return (
    <div className="groups--list">
      <h2>Groups page</h2>
      <table className="table">
        <thead key="thead">
          <tr className={styles.titles}>
            <th>id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group.id} className={styles.titles}>
              <td>{group.id} </td>
              <td>{group.name}</td>
              <td>{group.description}</td>
              <td className={styles.button}>
                <div class="btn-group mr-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleEdit(group.id)}
                  >
                    Edit
                  </button>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => handleDelete(group.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={handleToggle}>
        Add group
      </button>
    </div>
  );
};

export default GroupTable;
