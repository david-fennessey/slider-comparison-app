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
      title: "Product 1",
      price: "$9.99",
      image: "https://placehold.co/200x200",
    },
    {
      id: 2,
      title: "Product 2",
      price: "$19.99",
      image: "https://placehold.co/200x200",
    },
    {
      id: 1,
      title: "Product 1",
      price: "$9.99",
      image: "https://placehold.co/200x200",
    },
    {
      id: 3,
      title: "Product 2",
      price: "$19.99",
      image: "https://placehold.co/200x200",
    },
    {
      id: 4,
      title: "Product 1",
      price: "$9.99",
      image: "https://placehold.co/200x200",
    },
    {
      id: 5,
      title: "Product 2",
      price: "$19.99",
      image: "https://placehold.co/200x200",
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
