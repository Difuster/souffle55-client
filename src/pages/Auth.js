import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../http/adminAPI";
import {actions as adminActions} from "../slices/adminSlice";

const Auth = () => {
  const [data, setData] = useState({
    name: "", password: ""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logIn = async (e) => {
    e.preventDefault();
    try {
      let response = await login(data.name, data.password);
      dispatch(adminActions.setIsAuth(true));
      dispatch(adminActions.setAdmin(response));
      navigate("/admin");
    } catch(e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="введите имя"
          value={data.name}
          onChange={(e) => setData({
            ...data,
            name: e.target.value
          })}
        />
        <input
          type="password"
          placeholder="введите пароль"
          value={data.password}
          onChange={(e) => {
            setData({
              ...data,
              password: e.target.value
            })
          }}
        />
        <button onClick={logIn}>Авторизоваться</button>
      </form>
    </div>
  );
};

export default Auth;
