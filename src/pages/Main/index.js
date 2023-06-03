import React, { useState, useEffect } from "react";
import axios from "axios";
import PageLayout from "../../components/PageLayout";
import MainPageBody from "../../components/MainPageBody";

const Main = () => {
  const [cheesecakes, setCheesecakes] = useState(null);
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "http://localhost:5000/api/cheesecake",
      }).then((response) => setCheesecakes(response.data));
    } catch(err) {
      console.log(err);
    }
  }, [])
  console.log("cheesecakes", cheesecakes)

  return (
    <PageLayout>
      <MainPageBody cheesecakes={cheesecakes} />
    </PageLayout>
  );
};

export default Main;