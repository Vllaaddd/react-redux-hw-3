import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useGetContactsQuery } from "redux/operations";

export const ContactList = () => {

  const { data, isLoading } = useGetContactsQuery();

  return (
    <>
      {isLoading && (
        <div>Loading...</div>
      )}
      {!isLoading && (
        <ul className={css.list}>
          {data.map(contact => (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
        </ul>
      )}
    </>
  );
};