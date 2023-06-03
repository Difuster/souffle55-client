import React, { useState } from 'react';
import axios from "axios";
import './style.css';
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';
import Select from '../UI/Select';
import MyButton from '../UI/MyButton';

const Feedbacks = ({feedbacks, cakeId}) => {
  const [data, setData] = useState({
    name: "",
    feed: "",
    rating: 5
  });

  const sendData = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("text", data.feed);
    // formData.append("rating", data.rating);
    formData.append("cakeId", cakeId);
    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/api/feedback",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setData({...data, name: ""});
      setData({...data, feed: ""});
      setData({...data, rating: 5});
    } catch(err) {
      console.log(err);
    }
  }

  const onInputName = (e) => {
    setData({...data, name: e.target.value});
  }

  const onInputFeed = (e) => {
    setData({...data, feed: e.target.value});
  }

  const onSelectRating = (e) => {
    setData({...data, rating: e.target.value});
  }

  return (
    <section className="Feedbacks">
      <h2>Отзывы наших любимых клиентов:</h2>
      {feedbacks.map(feed => {
        return (
          <div className="Feedbacks__item">
            <article>{feed.text}</article>
            <p className="Feedbacks__signature">
              <span>{feed.name}</span>
              <span>{new Date(feed.createdAt).toLocaleDateString()}</span>
            </p>
          </div>
        )
      })}
      <form className="Feedbacks__form">
        <Input
          id="Ваше имя:"
          type="text"
          placeholder="Введите имя"
          value={data.name}
          onChange={onInputName}
        />
        <TextArea
          className="form__textarea"
          rows="7"
          placeholder="Ваш отзыв"
          onChange={onInputFeed}
        />
        <Select
          id="rating"
          className="form__select"
          onChange={onSelectRating}
          options={[5, 4, 3, 2, 1]}
          title="Оставьте оценку"
        />
        <MyButton className="form__button" onSendData={sendData}>Отправить</MyButton>
      </form>
    </section>
  );
};

export default Feedbacks;
