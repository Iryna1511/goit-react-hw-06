import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  const id = useId();
  return (
    <div className={css.container}>
      <label className={css.text} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        onChange={onSearch}
        className={css.input}
        value={value}
        id={id}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
