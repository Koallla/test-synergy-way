const GroupForm = ({
  title,
  name,
  description,
  handleSubmit,
  handleChange,
}) => (
  <div className="card">
    <div className="card-header">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Group name:</label>
          <input
            required
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />

          <label>Group description:</label>
          <input
            required
            className="form-control"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
);

export default GroupForm;
