import React, { useState } from "react";
import "./App.css";
import RecommendationSlider from "./RecommendationSlider";

function App() {
  const [sku, setSku] = useState("");

  const handleTitleChange = (event) => {
    setSku(event.target.value);
  };

  const handleSubmit = () => {
    // Make API call with the user input (title, price, image)
    // Update the state with the response from the API
    // Display the recommendation sliders based on the returned data
  };

  const carouselData = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      price: "$69.99",
      image: "https://source.unsplash.com/random/150x150/?headphones",
    },
    {
      id: 2,
      title: "Smart Watch with Heart Rate Monitoring",
      price: "$129.99",
      image: "https://source.unsplash.com/random/150x150/?smartwatch",
    },
    {
      id: 3,
      title: "Portable Espresso Machine",
      price: "$79.99",
      image: "https://source.unsplash.com/random/150x150/?espresso",
    },
    {
      id: 4,
      title: "Wireless Charging Pad",
      price: "$29.99",
      image: "https://source.unsplash.com/random/150x150/?wirelesscharger",
    },
    {
      id: 5,
      title: "Noise Cancelling Earbuds",
      price: "$49.99",
      image: "https://source.unsplash.com/random/150x150/?earbuds",
    },
    {
      id: 6,
      title: "Waterproof Bluetooth Speaker",
      price: "$39.99",
      image: "https://source.unsplash.com/random/150x150/?bluetoothspeaker",
    },
    {
      id: 7,
      title: "Fitness Tracker Watch",
      price: "$59.99",
      image: "https://source.unsplash.com/random/150x150/?fitbit",
    },
    {
      id: 8,
      title: "Portable Power Bank",
      price: "$24.99",
      image: "https://source.unsplash.com/random/150x150/?powerbank",
    },
    {
      id: 9,
      title: "Wireless Gaming Mouse",
      price: "$49.99",
      image: "https://source.unsplash.com/random/150x150/?gamingmouse",
    },
    {
      id: 10,
      title: "Mini Drone with Camera",
      price: "$89.99",
      image: "https://source.unsplash.com/random/150x150/?drone",
    },
    {
      id: 11,
      title: "Bluetooth Car Kit",
      price: "$34.99",
      image: "https://source.unsplash.com/random/150x150/?carkit",
    },
    {
      id: 12,
      title: "Wireless Noise Cancelling Headphones",
      price: "$149.99",
      image: "https://source.unsplash.com/random/150x150/?wirelessheadphones",
    },
    {
      id: 13,
      title: "Smart Home Security Camera",
      price: "$89.99",
      image: "https://source.unsplash.com/random/150x150/?securitycamera",
    },
    {
      id: 14,
      title: "Wireless Bluetooth Speaker",
      price: "$59.99",
      image: "https://source.unsplash.com/random/150x150/?bluetoothspeaker",
    },
    {
      id: 15,
      title: "Portable Water Purifier",
      price: "$49.99",
      image: "https://source.unsplash.com/random/150x150/?water",
    },
    // Add more items as needed
  ];

  return (
    <div className="App">
      <h1>Recommendation Slider App</h1>
      <div>
        <label>SKU:</label>
        <input type="text" value={sku} onChange={handleTitleChange} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {/* Display the recommendation sliders here */}
      <RecommendationSlider sliderName="default" products={carouselData} />
    </div>
  );
}

export default App;
