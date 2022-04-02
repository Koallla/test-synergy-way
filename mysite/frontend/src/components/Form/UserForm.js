const UserForm = ({
  title,
  username,
  group,
  selectOptions,
  handleSubmit,
  handleChange,
}) => (
  <div className="card">
    <div className="card-header">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User name:</label>
          <input
            required
            className="form-control"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />

          <label>User group:</label>
          <select
            required
            className="form-control"
            value={group}
            name="group"
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Choose a group
            </option>
            {selectOptions}
          </select>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
);

export default UserForm;
