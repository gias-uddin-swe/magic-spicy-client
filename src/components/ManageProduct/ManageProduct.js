import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageProduct.css";
import edit from "../../icons/Group 307.png";
import remove from "../../icons/Group 33150.png";
import loader from "../../icons/loading-spinner.gif";

const ManageProduct = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [content, setContent] = useState(false);
  const [spinner, setSpinner] = useState(true);
  console.log(allFoods);
  useEffect(() => {
    fetch("https://cryptic-oasis-98497.herokuapp.com/allFoods")
      .then((res) => res.json())
      .then((data) => {
        setSpinner(false);
        setAllFoods(data);
      });
  }, [content]);

  const handleDeleteFood = (id) => {
    fetch(`https://cryptic-oasis-98497.herokuapp.com/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setContent(true);
        }
      });
  };
  return (
    <div>
      {spinner ? (
        <div className="loading-div">
          <img src={loader} alt="" />
        </div>
      ) : (
        <div className="container table-div">
          <tr>
            <th>Food Name</th>
            <th>Description</th>
            <th>Price</th>
            <h5>Action</h5>
          </tr>
          {allFoods.map((food) => (
            <div className="div">
              <tr>
                <td>{food.name}</td>
                <td>{food.description}</td>
                <td>{food.price}</td>
                <button className="btn edit-btn">
                  <img src={edit} alt="" />
                </button>
                <button
                  onClick={() => handleDeleteFood(food._id)}
                  className="btn edit-btn"
                >
                  <img src={remove} alt="" />
                </button>
              </tr>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProduct;
