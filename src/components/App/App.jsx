import { useEffect, useState } from "react";
import CONTACTS from "../../contacts.json";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return CONTACTS;
  });

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (evt) => {
    setSearchValue(evt.target.value);
  };

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(searchValue.toLowerCase())
  // );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox onSearch={handleSearch} value={searchValue} />
      <ContactList />
    </div>
  );
}

export default App;

// contacts = { visibleContacts };
