import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageProduct.css";
import edit from "../../icons/Group 307.png";
import remove from "../../icons/Group 33150.png";

const ManageProduct = () => {
  const [allFoods, setAllFoods] = useState([]);
  console.log(allFoods);
  useEffect(() => {
    fetch("https://cryptic-oasis-98497.herokuapp.com/allFoods")
      .then((res) => res.json())
      .then((data) => setAllFoods(data));
  }, []);

  const handleDeleteFood = (id) => {
    fetch(`https://cryptic-oasis-98497.herokuapp.com/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
        }
      });
  };
  return (
    <div>
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
    </div>
  );
};

export default ManageProduct;
