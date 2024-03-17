import css from "./ContactForm.module.css";
import { useAddContactMutation } from "redux/operations";

export const ContactForm = () => {

  const [addContactMutation] = useAddContactMutation()

  const HandleSubmit = async (ev) => {
    try {
      ev.preventDefault()
      const form = ev.target;
      const addedUser = await addContactMutation({
        name: form.elements.name.value,
        phone: form.elements.number.value
      })
      console.log(addedUser);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={css.form} onSubmit={HandleSubmit}>
      <input
        className={css.field}
        type="text"
        name="name"
        placeholder="Enter name..."
      />
      <input
        className={css.field}
        type="text"
        name="number"
        placeholder="Enter phone number..."
      />
      <button type="submit">Add contact</button>
    </form>
  );
};