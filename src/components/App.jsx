// Components
import ContactForm from './Contact/ContactForm';
import ContactList from './Contact/ContactList';
import ContactFilter from './Contact/ContactFilter';

// Styles
import s from './Contact/Contact.module.css';

const App = () => {
  return (
    <div className={s.phoneboook}>
      <h1 className={s.phonebookTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contactsTitle}>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </div>
  );
};

export default App;
