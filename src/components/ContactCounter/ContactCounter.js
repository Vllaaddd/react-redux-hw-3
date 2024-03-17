import { useSelector } from "react-redux";
import css from "./ContactCounter.module.css";
import { getContacts } from "../../redux/selectors";

export const ContactCounter = () => {
  const contacts = useSelector(getContacts)
  const count = contacts.length
  return (
    <div>
      <p className={css.text}>Contacts: {count}</p>
    </div>
  );
};