import React from "react";
import { Link } from "react-router-dom";
import AdminForm from "../../components/AdminForm";
import "./style.css";

const Admin = () => {
  return (
    <div className="admin">
      <div className="container">
        <header className="admin__header">
          <h1 className="admin__title">Административная панель</h1>
          <Link className="admin__link" to="/">Главная страница</Link>
        </header>
        <hr size="4" color="grey"/>
        <main className="admin__body">
          <h2 className="admin__title">Добавление товара</h2>
          <p className="admin__manual">Чтобы добавить товар необходимо заполнить все поля и нажать кнопку добавить</p>

          <AdminForm />

        </main>
      </div>
    </div>
  );
};

export default Admin;