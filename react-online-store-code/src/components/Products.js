import React, { useState, useEffect } from "react";
import { Card, Dropdown, Button, ButtonGroup } from "react-bootstrap";
import "./Products.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

function Products({
  cart, // The cart state containing items added by the user.
  updateTotalPrice, // A function to update the total price when a product is added to the cart.
  totalPrice, // The total price of all items in the cart.
  selectedColors, // A state object to track the selected colors for different products.
  handleColorSelect, // A function to handle color selection for a product.
}) {
  // Product data, an array of product objects
  const products = [
    {
      id: 1,
      name: "Dumbbell Set",
      description: "Adjustable Dumbbell Set for Home Workouts",
      price: 499.99,
      colors: ["Black", "Silver", "Red"],
      image: {
        src: "https://gymgear.co.za/wp-content/uploads/2023/05/2.5KG-TO-50KG-DUMBBELLS-2.png",
        alt: "Dumbbell Set Image", // Descriptive alt text for accessibility
      },
    },
    {
      id: 2,
      name: "Yoga Mat",
      description: "Eco-Friendly Non-Slip Yoga Mat for perfert work-out",
      price: 149.99,
      colors: ["Blue", "Purple", "Green"],
      image: {
        src: "https://kurma-yoga.com/wp-content/uploads/2021/05/kurma_yoga_mat_core_group_5-colors_swirl_LR.jpg",
        alt: "Yoga Mat Image",
      },
    },
    {
      id: 3,
      name: "Running Shoes",
      description: "Lightweight Running Shoes for Men and Women",
      price: 399.99,
      colors: ["Black/White", "Blue/Orange", "Gray/Pink"],
      image: {
        src: "https://cdn.outsideonline.com/wp-content/uploads/2021/07/Super_shoe_showdown_s.jpg",
        alt: "Running Shoes Image",
      },
    },
    {
      id: 4,
      name: "Fitness Tracker",
      description: "Smart Fitness Tracker with Heart Rate Monitor",
      price: 299.99,
      colors: ["Black", "Blue", "Red"],
      image: {
        src: "https://www.jllfitness.co.uk/pub/media/catalog/product/cache/c255b74a77fee2d9d752a7247969a418/w/1/w100---main-image.jpg",
        alt: "Fitness Tracker Image",
      },
    },
    {
      id: 5,
      name: "Weight Bench",
      description: "Adjustable Weight Bench for Strength Training",
      price: 799.99,
      colors: ["Black/Red", "Gray/Black", "Green/Black"],
      image: {
        src: "https://img.zcdn.com.au/lf/50/hash/39178/20188197/4/.jpg",
        alt: "Weight Bench Image",
      },
    },
    {
      id: 6,
      name: "Jump Rope",
      description: "Speed Jump Rope for Cardio Workouts",
      price: 39.99,
      colors: ["Black", "Red", "Blue"],
      image: {
        src: "https://cdn11.bigcommerce.com/s-muk18pjqrv/images/stencil/1280x1280/products/72118/1115174/apixha0i6__20408.1646488115.jpg?c=1",
        alt: "Jump Rope",
      },
    },
    {
      id: 7,
      name: "Exercise Ball",
      description: "Anti-Burst Exercise Ball for Core Workouts",
      price: 80.0,
      colors: ["Purple", "Green", "Blue"],
      image: {
        src: "https://m.media-amazon.com/images/I/51DWHODjjPL.jpg",
        alt: "Exercise Ball Image",
      },
    },
    {
      id: 8,
      name: "Resistance Bands",
      description: "Set of Resistance Bands for Home Gym",
      price: 60.0,
      colors: ["Yellow", "Red", "Black"],
      image: {
        src: "https://tenthsports.co.za/wp-content/uploads/2021/01/Resistance-Band-Different-Colours.jpg",
        alt: "Resistance Bands Image",
      },
    },
    {
      id: 9,
      name: "Water Bottle",
      description: "Insulated Water Bottle with Straw Lid",
      price: 45.0,
      colors: ["Blue", "Pink", "Black"],
      image: {
        src: "https://m.media-amazon.com/images/I/715TaA0AMJL.jpg",
        alt: "Water Bottle Image",
      },
    },
    {
      id: 10,
      name: "Gym Bag",
      description: "Durable Gym Bag with Shoe Compartment",
      price: 139.99,
      colors: ["Black", "Gray", "Navy"],
      image: {
        src: "https://brandwear.co.nz/cdn/shop/files/109077-0-min_1200x.jpg?v=1686627639",
        alt: "Gym Bag Image",
      },
    },
  ];

  // To initialize visibility state in local storage and in component state
  const [isTotalPriceVisible, setTotalPriceVisible] = useState(
    localStorage.getItem("isTotalPriceVisible") === "true"
  );

  // To use local storage to remember the visibility state
  useEffect(() => {
    localStorage.setItem("isTotalPriceVisible", isTotalPriceVisible.toString());
  }, [isTotalPriceVisible]);

  const navigate = useNavigate(); // Initialize navigate hook

  // Function to add a product to the cart and show the total price
  const handleAddToCart = (product) => {
    const price = product.price;
    updateTotalPrice(price);

    // Set isTotalPriceVisible to true after adding an item to the cart
    setTotalPriceVisible(true);

    // To use the navigate hook to programmatically navigate to the current route to refresh the component
    navigate("./", { replace: true });
  };

  return (
    <div>
      <div>
        {/* Page Heading */}
        <h1 className="heading ms-3 mt-3" style={{ color: "white" }}>
          Products
        </h1>
        <div
          className="me-3"
          style={{ color: "darkslategray", textAlign: "end" }}
        >
          {isTotalPriceVisible && ( // Show total price only if isTotalPriceVisible is true
            <h2 className="total-price">
              Total price: R{totalPrice.toFixed(2)}
            </h2>
          )}
        </div>

        {/* Container for product cards, centered in text-center */}
        <div className="container">
          {/* Flex container to arrange products side by side */}
          <div className="row">
            {" "}
            {/* Use flex container */}
            {/* Mapping through products and creating a card for each */}
            {products.map((product) => (
              <Card key={product.id} style={{ width: "18rem", margin: "5px" }}>
                <Card.Img
                  variant="top"
                  src={product.image.src} // Image source URL
                  alt={product.image.alt} // Image alt text for accessibility
                  className="custom-image"
                />
                <Card.Body>
                  {/* To display the product name as the card title */}
                  <Card.Title>{product.name}</Card.Title>

                  {/* To show the product description */}
                  <Card.Text>{product.description}</Card.Text>
                  {/* To display the product price with 'R' and 2 decimal places */}
                  <Card.Text>Price: R{product.price.toFixed(2)}</Card.Text>

                  {/* Dropdown button for color selection */}
                  <Dropdown as={ButtonGroup}>
                    {/* To display the selected color or "Choose Color" if no color is selected */}
                    <Button variant="secondary">
                      {selectedColors[product.id] || "Choose Color"}
                    </Button>

                    {/* Toggle button for the color selection dropdown */}
                    <Dropdown.Toggle
                      split
                      variant="secondary"
                      id="dropdown-split-basic"
                    />

                    {/* Dropdown menu for available colors */}
                    <Dropdown.Menu>
                      {/* Mapping through available colors in dropdown */}
                      {product.colors.map((color) => (
                        <Dropdown.Item
                          key={color}
                          onClick={() => handleColorSelect(product, color)}
                        >
                          {color}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* Button to add the product to the cart */}
                  <Button onClick={() => handleAddToCart(product)}>Buy</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
