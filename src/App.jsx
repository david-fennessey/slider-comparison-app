import {
  AppBar,
  Container,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import AlgorithmCheckboxes from "./components/AlgorithmCheckboxes";
import FancyButton from "./components/FancyButton";
import RecommendationSlider from "./components/RecommendationSlider";

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

  const productToCompare = {
    id: 9999,
    title: "Default Item",
    price: "$29.99",
    image: "https://source.unsplash.com/random/150x150/?default",
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Recommendation Slider Comparison Tool
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography
              variant="h6"
              color="textSecondary"
              component="h2"
              gutterBottom
            >
              Select Algorithms
            </Typography>
            <AlgorithmCheckboxes />
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="h6"
              color="textSecondary"
              component="h2"
              gutterBottom
            >
              Search For a SKU
            </Typography>
            <TextField id="outlined-basic" label="SKU" variant="outlined" />
          </Grid>
          <FancyButton buttonText="Search SKU" />
          <FancyButton buttonText="Random SKU" />
          <Grid item xs={2}>
            <Typography
              variant="h6"
              color="textSecondary"
              component="h2"
              gutterBottom
            >
              SKU to Compare
            </Typography>
            {console.log(productToCompare)}
            <div className="slider-slide" key={productToCompare.id}>
              <img
                src={productToCompare.image}
                alt={productToCompare.title}
                className=""
              />
              <h3>{productToCompare.title}</h3>
              <p>{productToCompare.price}</p>
            </div>
          </Grid>
        </Grid>
        <RecommendationSlider
          sliderName="Algorithm 1"
          products={carouselData}
        />
      </Container>
    </div>
  );
}

export default App;
