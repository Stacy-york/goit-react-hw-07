import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectLoading, selectError } from '../../redux/contactsSlice';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (isLoading) return <p>Loading contacts...</p>;
  if (error) return <p className={css.error}>Error: {error}</p>;

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}