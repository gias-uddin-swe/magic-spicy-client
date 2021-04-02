import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import logo1 from "../../icons/grid 1.png";
import add from "../../icons/plus 1.png";
import edit from "../../icons/edit 1.png";
import ManageProduct from "../ManageProduct/ManageProduct";
import upload from "../../icons/cloud-upload-outline 1.png";

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
    fetch("https://cryptic-oasis-98497.herokuapp.com/addFood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
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
  const [manageFoods, setManageFoods] = useState(false);
  console.log(manageFoods);
  return (
    <div className="row">
      <div className="side-navbar col-md-3 col-sm-4">
        <Link onClick={() => setManageFoods(true)} className="dashboard-item">
          <img style={{ width: "25px" }} src={logo1} alt="" /> Manage Product
        </Link>
        <Link onClick={() => setManageFoods(false)} className="dashboard-item">
          <img style={{ width: "25px" }} src={add} alt="" /> Add Product
        </Link>
        <Link onClick={() => setManageFoods(true)} className="dashboard-item">
          <img style={{ width: "25px" }} src={edit} alt="" /> Edit Product
        </Link>
      </div>
      {manageFoods ? (
        <div className="container col-md-9 col-sm-8">
          <ManageProduct></ManageProduct>
        </div>
      ) : (
        <div className="content-area col-md-9 col-sm-8 container text-center">
          <h1 className="text-left text-info">Add Food Item</h1>
          <div className="container add-food-sub">
            <div className="container add-food">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="input-field"
                  name="name"
                  placeholder="name"
                  ref={register}
                />
                <input
                  className="input-field"
                  name="price"
                  placeholder="price"
                  ref={register}
                />
                <br />
                <input
                  className="input-field"
                  name="description"
                  placeholder="description"
                  ref={register}
                />

                <input
                  className="input-field"
                  name="Date"
                  type="date"
                  ref={register}
                />

                <br />
                <label className="upload-file" htmlFor="uploadImage">
                  <img src={upload} alt="" /> Upload image
                </label>
                <input
                  className="input-field"
                  onChange={handleImageUpload}
                  name="file"
                  type="file"
                  id="uploadImage"
                />
                {errors.Required && <span>This field is required</span>}
                <br />

                <input
                  className="btn btn-info mt-5"
                  type="submit"
                  value="Add Food"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
