import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { adminRoutes, publicRoutes } from "../routes";
import { selectIsAuth, selectAdmin } from "../slices/adminSlice";

const AppRouter = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <Routes>
      {isAuth && adminRoutes.map(({path, Component}) => {
        return <Route key={path} path={path} element={<Component />} exact />
      })}
      {publicRoutes.map(({path, Component}) => {
        return <Route key={path} path={path} element={<Component />} exact />
      })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;