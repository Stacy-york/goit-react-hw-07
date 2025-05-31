import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { selectContacts } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required('Required'),
  number: Yup.string().min(3).max(50).required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.form}>
          <label className={css.label} htmlFor="name">
            Name:
            <Field className={css.input} id="name" autoComplete="name" name="name" type="text" />
          </label>
          <ErrorMessage className={css.error} name="name" component="div" style={{ color: 'red' }} />
        </div>

        <div className={css.form}>
          <label className={css.label} htmlFor="number">
            Number:
            <Field className={css.input} id="number" autoComplete="tel" name="number" type="tel" />
          </label>
          <ErrorMessage className={css.error} name="number" component="div" style={{ color: 'red' }} />
        </div>

        <button className={css.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}