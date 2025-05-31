import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required('Required'),
  number: Yup.string().min(3).max(50).required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact({ id: nanoid(), ...values }));
        actions.resetForm();
      }}
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

