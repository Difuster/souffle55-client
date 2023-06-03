import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";
import CakePageBody from "../components/CakePageBody";
import PageLayout from "../components/PageLayout";

const Cake = () => {
  const location = useLocation();
  const {cake} = location.state;
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "http://localhost:5000/api/feedback",
      }).then((response) => setFeedbacks(response.data));
    } catch(err) {
      console.log(err);
    }
  }, [])

  return (
    <div>
      <PageLayout>
        <CakePageBody cake={cake} feedbacks={feedbacks}/>
      </PageLayout>
    </div>
  );
};

export default Cake;