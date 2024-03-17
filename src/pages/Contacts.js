import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { FilterForm } from "components/FilterForm/FilterForm";

export default function Contacts(){
    return(
        <>
            <ContactForm />
            <FilterForm />
            <ContactList />
        </>
    )
}