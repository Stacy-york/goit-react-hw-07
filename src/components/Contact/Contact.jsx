import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div className={css.contactItem}>
      <p className={css.text}>{contact.name}: {contact.number}</p>
      <button className={css.button} onClick={handleDelete}>Delete</button>
    </div>
  );
}