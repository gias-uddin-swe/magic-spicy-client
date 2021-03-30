import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const Admin = () => {
  const [imageURL, setImageURL] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const foodInfo = {
      name: data.name,
      date: data.Date,
      imageURL: imageURL,
      price: data.price,
      description: data.description,
    };
    fetch("http://localhost:5000/addFood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    console.log(foodInfo);
  };

  const handleImageUpload = (event) => {
    // console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "6f6183563adac5d3d174c6a92660308a");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Admin area </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" placeholder="name" ref={register} />
        <br />
        <input name="price" placeholder="price" ref={register} />
        <br />

        <input name="Date" type="date" ref={register} />
        <br />

        <input name="description" placeholder="description" ref={register} />
        <br />
        <input onChange={handleImageUpload} name="file" type="file" />
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Admin;
