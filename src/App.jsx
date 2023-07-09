import {
  AppBar,
  Container,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import FancyButton from "./components/FancyButton";
import ModelCheckboxes from "./components/ModelCheckboxes/ModelCheckboxes";
import CarouselContainer from "./components/RecommendationCarousel";

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

  // We enable the first algorithm by default, so we set the first element to true. Rest start as invisible
  const [models, setModelState] = useState({
    foo: {
      name: "foo",
      visible: true,
      url: "http://localhost:3030/algorithm-1",
    },
    bar: {
      name: "bar",
      visible: false,
      url: "http://localhost:3030/algorithm-2",
    },
    baz: {
      name: "baz",
      visible: false,
      url: "http://localhost:3030/algorithm-3",
    },
  });

  const [searchSku, setSearchSku] = useState();

  const handleToggleDiv = (key) => {
    setModelState({
      ...models,
      [key]: { ...models[key], visible: !models[key].visible },
    });
  };

  const productToCompare = {
    id: 9999,
    sku: "2802439",
    title: "Default Item",
    price: "$29.99",
    image: "https://source.unsplash.com/random/150x150/?default",
  };

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
            <ModelCheckboxes
              models={models}
              setModelVisibility={handleToggleDiv}
            />
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
            <TextField
              id="outlined-basic"
              label="SKU"
              variant="outlined"
              onChange={(value) => setSearchSku(value)}
            />
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
              Anchor SKU
            </Typography>
            <div className="sku-layout" key={productToCompare.id}>
              <img
                src={productToCompare.image}
                alt={productToCompare.title}
                className=""
              />
              <h3>{productToCompare.title}</h3>
              <h5>SKU: {productToCompare.sku}</h5>
              <p>{productToCompare.price}</p>
            </div>
          </Grid>
        </Grid>
        {Object.values(models).map((model) => {
          if (model.visible) {
            return (
              <CarouselContainer
                key={model.name}
                url={model.url}
                carouselName={model.name}
                searchSku={searchSku}
              />
            );
          }
        })}
      </Container>
    </div>
  );
}

export default App;
