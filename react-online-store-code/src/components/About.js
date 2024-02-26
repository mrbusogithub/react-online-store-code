import React from "react";
import { Figure } from "react-bootstrap";
import StoreLogo from "./images/StoreLogo.png";
import StoreImageA from "./images/StoreImageA.jpg";
import StoreImageB from "./images/StoreImageB.jpg";
import "./About.css";

function About({
  cart, // The cart state containing items added by the user.
  totalPrice, // The total price of all items in the cart.
  updateTotalPrice, // A function to update the total price when a product is added to the cart.
  itemsAdded, // A boolean state indicating whether items have been added to the cart.
}) {
  return (
    <div>
      <div>
        {/* Page Heading */}
        <h1 className="heading mt-3 ms-3" style={{ color: "white" }}>
          About Gym Store
        </h1>
        <div
          className="me-3"
          style={{ color: "darkslategray", textAlign: "end" }}
        >
          {/* Total Price Display */}
          {itemsAdded && (
            <h2 className="total-price">
              Total price: R{totalPrice.toFixed(2)}
            </h2>
          )}
        </div>

        {/* Logo and Description */}
        <div className="logo-figure text-center">
          <Figure>
            <Figure.Image
              width={200}
              height={200}
              alt="Sports and Fitness Store Logo"
              src={StoreLogo}
              style={{ marginBottom: "-45px" }} // To decrease the gap between logo and caption
            />
            {/* Store Description */}
            <Figure.Caption className="mb-3" style={{ fontSize: "30px" }}>
              "Your one-stop shop for sports and fitness gear."
            </Figure.Caption>
          </Figure>
        </div>

        {/* Store Images */}
        <div className="store-images text-center">
          <Figure>
            {/* Store Image 1 */}
            <Figure.Image
              width={700}
              height={500}
              alt="Store Image 1"
              src={StoreImageA}
              className="image-hover-1"
            />
          </Figure>

          <Figure>
            {/* Store Image 2 */}
            <Figure.Image
              width={700}
              height={500}
              alt="Store Image 2"
              src={StoreImageB}
              className="image-hover-2"
            />
          </Figure>
        </div>

        {/* Contact Details */}
        <div className="text-center" style={{ color: "darkslategrey" }}>
          {/* Contact Information Heading */}
          <h2>Contact Information</h2>
          <p>Address: 123 Flint Street, Cape Town, Greenland</p>
          <p>Phone: (083) 456-7890</p>
          <p>Email: info@gymstore.com</p>
        </div>
      </div>
    </div>
  );
}

export default About;
