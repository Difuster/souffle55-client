import React, { useState } from "react";
import axios from "axios";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import Select from "../UI/Select";
import MyButton from "../UI/MyButton";
import './style.css';

const AdminForm = () => {
  const [data, setData] = useState({
    category: "Чизкейки",
    name: "",
    description: "",
    calories: 0,
    weight: 0,
    rating: 0,
    price: 0,
    discount: 0,
    img: null,
  });

  const inputs = [
    {id: "Название", type: "text", placeholder: "Название", value: data.name, onChange: (e) => setData({...data, name: e.target.value})},
    {id: "Количество калорий", type: "number", placeholder: 0, value: data.calories, onChange: (e) => setData({...data, calories: Number(e.target.value)})},
    {id: "Вес готового продукта", type: "number", placeholder: 0, value: data.weight, onChange: (e) => setData({...data, weight: Number(e.target.value)})},
    {id: "Рейтинг", type: "number", placeholder: 5, value: data.rating, onChange: (e) => setData({...data, rating: Number(e.target.value)})},
    {id: "Стоимость", type: "number", placeholder: 0, value: data.price, onChange: (e) => setData({...data, price: Number(e.target.value)})},
    {id: "Размер скидки", type: "number", placeholder: 0, value: data.discount, onChange: (e) => setData({...data, discount: Number(e.target.value)})},
  ];

  const sendData = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("calories", data.calories);
    formData.append("weight", data.weight);
    formData.append("rating", data.rating);
    formData.append("price", data.price);
    formData.append("discount", data.discount);
    formData.append("img", data.img);
    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/api/cheesecake",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      console.log("DONE");
    } catch(err) {
      console.log(err);
    }
  }

  const selectFile = (e) => {
    setData({...data, img: e.target.files[0]})
  }

  return (
    <div>
      <form className="form">

        <Select
          id="category"
          className="form__select"
          onChange={(e) => setData({...data, category: e.target.value})}
          options={["Чизкейки", "Моти", "Кексы"]}
          title="Выберите категорию"
        />
        <TextArea
          className="form__textarea"
          rows="7"
          placeholder="Описание продукта"
          onChange={(e) => setData({...data, description: e.target.value})}
        />

        {inputs.map(item => {
          return (
            <div key={item.id}>
              <Input
                id={item.id}
                type={item.type}
                placeholder={item.placeholder}
                value={item.value}
                onChange={item.onChange}
              />
            </div>
          )
        })}

        <label htmlFor="avatar">Choose a profile picture:</label>
        <input
          type="file"
          id="avatar" name="avatar"
          accept="image/png, image/jpeg"
          onChange={selectFile}
        />
        <MyButton className="form__button" onSendData={sendData}>Добавить</MyButton>
      </form>
    </div>
    );
};

export default AdminForm;
