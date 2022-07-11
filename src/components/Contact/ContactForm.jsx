import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

// Hooks react-redux
import { useSelector, useDispatch } from 'react-redux';

// Toast notify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Redux-slice
import { addContact } from 'redux/contact/contactSlice';

// Styles
import s from './Contact.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const alreadyInContacts = contacts.find(contact => contact.name === name);

  const onNameChange = event => setName(event.target.value);
  const onNumberChange = event => setNumber(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    if (alreadyInContacts) {
      return toast.warn(`${name} is already in contacts`, {
        theme: 'dark',
      });
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );

    setName('');
    setNumber('');

    return toast.success(`${name} added in your phonebook 📱`, {
      theme: 'dark',
    });
  };

  return (
    <form className={s.phonebookForm} onSubmit={handleSubmit}>
      <label className={s.phonebookLabel}>
        Name
        <input
          className={s.phonebookInput}
          value={name}
          onChange={onNameChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.phonebookLabel}>
        Number
        <input
          className={s.phonebookInput}
          value={number}
          onChange={onNumberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.phonebookButton} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
