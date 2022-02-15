import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import "./index.css";
const { API } = require("../config/" + process.env.NODE_ENV);

function GroceryApp() {
  const [foodData, setFoodData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [cartData, setCartData] = useState([]);

  async function loadFoodData() {
    const result = await axios.get(API.GROCERY_END_POINT);
    setFoodData(result.data);
    setInitialData(result.data);
  }

  async function loadCartData() {
    const savedData = await axios.get(`${API.USER_END_POINT}/93`);
    setCartData(savedData.data.cart);
  }

  useEffect(function () {
    loadFoodData();
    loadCartData();
  }, []);

  async function handleAddToCart(item) {
    let oldCartList = [...cartData];
    // if new Item does not exist in old array then only push it
    // otherwise do not push it
    let shouldAddItem = true;
    oldCartList.forEach(foodItem => {
      if (item.name === foodItem.name) {
        shouldAddItem = false;
      }
    });
    if (shouldAddItem) {
      oldCartList.push(item);
      updateCartDataOnServer(oldCartList);
    }
  }

  async function updateCartDataOnServer(updatedCartData) {
    const result = await axios.put(`${API.USER_END_POINT}/93`, {
      cart: updatedCartData
    });
    loadCartData();
  }
  function handleCounterClick(currentClickedItemId, action, foodWeight) {
    if (action === "minus" && foodWeight === 1) {
      // call delete item from cart Method

      // then remove that item from cart array using filter method.
      const remainingItems = cartData.filter(function (data, key) {
        return key !== currentClickedItemId;
      });
      updateCartDataOnServer(remainingItems);
    } else {
      const result = cartData.map(function (food, key) {
        let newWeight = food.weight;
        if (key === currentClickedItemId) {
          if (action === "plus") {
            newWeight = food.weight + 1;
          } else {
            newWeight = food.weight - 1;
          }
        }
        return { ...food, weight: newWeight };
      });
      updateCartDataOnServer(result);
    }
  }
  function printCartItems() {
    return cartData.map(function (food, key) {
      return (
        <li key={key} className="pb-3 d-flex align-items-center justify-content-between">
          <span className="itemName">{food.name}</span>
          <div className="buttonBox">
            <button
              className="lightGreen btn"
              onClick={() => handleCounterClick(key, "minus", food.weight)}
            >
              -
            </button>
            <span className="lightGreen btn">{food.weight}</span>
            <button className="lightGreen btn" onClick={() => handleCounterClick(key, "plus")}>
              +
            </button>
          </div>
          <span className="priceItem text-right">
            <strong>₹{(food.price - food.price / food.discountPercentage) * food.weight}</strong>
          </span>
        </li>
      );
    });
  }
  function getTotalPrice() {
    return cartData.reduce(function (sum, food) {
      console.log(sum, food);
      // here person is an object with two keys i.e name and age
      // hence we are using person.age
      return sum + (food.price - food.price / food.discountPercentage) * food.weight;
    }, 0);
  }

  function printFoodItems() {
    return foodData.map(function (item, key) {
      return (
        <li key={key} className="col-sm-4">
          <div className="boxWrapper p-0">
            <div className="imageWrapper">
              <img src={item.image} />
            </div>
            <div className="infoWrapper">
              <h4 className="nameWrapper">{item.name}</h4>
              <p className="quantityWrapper">{item.weight}kg</p>
            </div>
            <div className="priceWrapper p-3 d-flex align-items-center">
              <div className="flex-1">
                <h6>
                  <strong>₹{item.price - item.price / item.discountPercentage} </strong>
                  <span className="text-decoration-line-through originalPrice">₹{item.price}</span>
                </h6>
              </div>
              <button className="btn btn-success cartButton" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        </li>
      );
    });
  }
  function totalItems() {
    if (cartData.length !== 0) {
      return (
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="m-0">Subtotal</h3>
            <h3 className="m-0">₹{getTotalPrice()}</h3>
          </div>
          <p>Extra charges may apply</p>
          <div className="checkoutWrapper">
            <button className="btn btn-success" onClick={() => updateCartDataOnServer(cartData)}>
              Checkout -&gt;
            </button>
          </div>
        </div>
      );
    }
  }
  function getFruits(filterValue) {
    // setSearchInput(filterValue);
    if (filterValue !== "") {
      const newData = initialData.filter(function (items) {
        return items.name.toLowerCase().includes(filterValue);
      }); //filter data based on item.name
      setFoodData(newData);
    } else {
      //if filterValue is empty setFoodData to initialData from api
      setFoodData(initialData);
    }
  }
  return (
    <div className="marketContainer mx-auto">
      <h1 className="heading text-center mb-3">Our Menu</h1>
      <div className="row">
        <div className="col-sm-8">
          <div className="searchBar d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="search products"
              onChange={event => getFruits(event.target.value)}
            />
            <span className="col-sm-3 ms-3 white">{foodData.length} products found</span>
          </div>
          <ul className="row groceryItemsList p-0">{printFoodItems()}</ul>
        </div>
        <div className="col-sm-4">
          <div>
            <h2>Cart</h2>
            <p>{cartData.length} Items</p>
          </div>
          <ul className="p-0">{printCartItems()}</ul>
          <div>{totalItems()}</div>
        </div>
      </div>
    </div>
  );
}
export default GroceryApp;
