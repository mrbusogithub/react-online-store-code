import { Routes, Route } from "react-router-dom"; // Import React Router components
import Navigation from "./components/Navigation"; // Import the Navigation component
import Home from "./components/Home"; // Import the Home component
import About from "./components/About"; // Import the About component
import Products from "./components/Products"; // Import the Products component
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS styles
import "./App.css"; // Import custom CSS styles
import React, { useState } from "react";
import Login from "./components/Login"; // Import the Login component
import Registration from "./components/Registration"; // Import the Registration component

function App() {
  const appStyle = {
    backgroundColor: "#92B1B6", // To set the background color
  };

  const [cart, setCart] = useState([]); // To initialize cart state
  const [totalPrice, setTotalPrice] = useState(0); // To initialize totalPrice state
  const [selectedColors, setSelectedColors] = useState({}); // To initialize selectedColors state
  const [itemsAdded, setItemsAdded] = useState(false); // To initialize itemsAdded state

  // Function to update total price
  const updateTotalPrice = (price) => {
    setTotalPrice(totalPrice + price);
    // To set itemsAdded to true when the total price is updated
    setItemsAdded(true);
  };

  // Function to handle color selection from dropdown
  const handleColorSelect = (product, color) => {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [product.id]: color,
    }));
  };

  return (
    <div className="app" style={appStyle}>
      <Navigation /> {/* To render the Navigation component */}
      <Routes>
        <Route
          path="/products"
          element={
            <Products
              cart={cart} // Passes the cart state to the Products component.
              updateTotalPrice={updateTotalPrice} // Passes the updateTotalPrice function to update the total price
              totalPrice={totalPrice} // Passes the total price to the Products component
              selectedColors={selectedColors} // Passes the selectedColors state to the Products component
              handleColorSelect={handleColorSelect} // Passes the handleColorSelect function to handle color selection.
            />
          }
        />{" "}
        {/* To define route for Products component */}
        <Route
          path="/about"
          element={
            <About
              cart={cart} // Passes the cart state to the About component
              totalPrice={totalPrice} // Passes the total price to the About component.
              itemsAdded={itemsAdded} // Passes the itemsAdded state to the About component
            />
          }
        />{" "}
        {/* To define route for About component */}
        <Route path="/login" element={<Login />} /> {/* Add the Login route */}
        <Route path="/registration" element={<Registration />} />{" "}
        {/* Add the Registration route */}
        <Route path="/" element={<Home />} />{" "}
        {/* To define route for Home component */}
      </Routes>
    </div>
  );
}

export default App;

// Intructions about the on-click actions of the forms are not specified that's why there's no action after submit action

// References:
// from Codevolution - https://youtu.be/8vpQvZ7RZgI?si=jt_YFH5enNP6M7JO_
