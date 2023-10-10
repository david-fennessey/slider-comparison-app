import { useState } from "react";

import styled from "@emotion/styled";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";

import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import loadSkus from "./utilities/load_skus";
import loadAndParseSourceA from "./utilities/load_source_a";
import loadAndParseSourceB from "./utilities/load_source_b";
import loadAndParseSourceC from "./utilities/load_source_c";

import "./App.css";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
const drawerWidth = 240;

const AppContainer = () => {
  // We enable the first algorithm by default, so we set the first element to true. Rest start as invisible

  const [models, setModelState] = useState({
    1: {
      id: 1,
      name: "Title Embedding",
      visible: true,
      data: loadAndParseSourceA,
    },
    2: {
      id: 2,
      name: "OpenAI Terms + Jaccard",
      visible: false,
      data: loadAndParseSourceB,
    },
    3: {
      id: 3,
      name: "OpenAI Terms + Pseudo Jaccard (live)",
      visible: false,
      data: loadAndParseSourceC,
    },
  });

  // Getting all valid skus, and then doing a lookup on the query sku to get the product details for rendering
  var allSkus = loadSkus();
  const [querySku, setQuerySku] = useState(null);
  const querySkuModel = allSkus[querySku];

  const toggleModelVisibility = (key) => {
    setModelState({
      ...models,
      [key]: { ...models[key], visible: !models[key].visible },
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
      }}
    >
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div">
            Recommendation Slider Comparison Tool
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
      <Box sx={{ display: "flex", alignSelf: "flex-start" }}>
        <Box
          sx={{
            width: drawerWidth,
            padding: "1rem",
          }}
        >
          <Sidebar
            models={models}
            setModelVisibility={toggleModelVisibility}
            setQuerySku={setQuerySku}
            querySkuModel={querySkuModel}
            querySku={querySku}
            allSkus={allSkus}
          />
        </Box>
        <Box
          component="main"
          sx={{
            width: `calc(100vw - ${drawerWidth}px)`,
            overflow: "hidden",
          }}
        >
          <Content models={models} querySku={querySku} allSkus={allSkus} />
        </Box>
      </Box>
    </Box>
  );
};

export default AppContainer;
