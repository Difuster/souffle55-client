import React from "react";
import { Link, useLocation } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import CakesPageBody from "../components/CakesPageBody";

const Cakes = () => {
  const location = useLocation();
  const {data} = location.state;

  return (
    <PageLayout>
      <CakesPageBody data={data} />
    </PageLayout>
  );
};

export default Cakes;
