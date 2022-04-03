import styles from "./Group.module.css";

const GroupForm = ({
  title,
  name,
  description,
  handleSubmit,
  handleChange,
  handleCloseForm,
}) => (
  <div className="card">
    <div className="card-header">
      <form onSubmit={handleSubmit}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={handleCloseForm}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
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
