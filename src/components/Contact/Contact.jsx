import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Conntact.module.css";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.dscr}>
        <h3>{name}</h3>
        <p>{number}</p>
      </div>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </>
  );
};

export default Contact;
