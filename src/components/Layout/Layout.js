import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import Header from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";

export const Layout = ({ children }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <main className={css.container}>
      <Header />
      <Outlet>
        {children}
      </Outlet>
    </main>
  )
};