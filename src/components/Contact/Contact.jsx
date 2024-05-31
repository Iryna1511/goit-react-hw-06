import css from "./Conntact.module.css";

const Contact = ({ userData: { name, number, id }, onDelete }) => {
  return (
    <>
      <div className={css.dscr}>
        <h3>{name}</h3>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </>
  );
};

export default Contact;
