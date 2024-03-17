import { useDispatch } from "react-redux";
import css from "./FilterForm.module.css";
import { filterUpdate } from "redux/filterSlice";

export const FilterForm = () => {
  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    event.preventDefault();
    dispatch(filterUpdate(event.target.value))
  };

  return (
    <form>
      <input
        className={css.field}
        type="text"
        name="filter"
        placeholder="Enter your request"
        onChange={handleChange}
      />
    </form>
  );
};