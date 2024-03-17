import { Layout } from "./Layout/Layout";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { FilterForm } from "./FilterForm/FilterForm";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { useEffect } from "react";

export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <Layout>
      <ContactForm />
      <FilterForm />
      <ContactList />
    </Layout>
  );
};