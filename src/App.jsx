import { useState } from "react";

import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";

import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
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
      name: "Source A",
      visible: true,
      data: loadAndParseSourceA,
    },
    2: {
      id: 2,
      name: "Source B",
      visible: false,
      data: loadAndParseSourceB,
    },
    3: {
      id: 3,
      name: "Source C",
      visible: false,
      data: loadAndParseSourceC,
    },
  });

  const [anchorSku, setAnchorSku] = useState(null);

  const anchorSkuProduct = {
    id: 9999,
    sku: "2802439",
    title: "Default Item",
    price: "$29.99",
    image: "https://source.unsplash.com/random/150x150/?default",
  };

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
            setAnchorSku={setAnchorSku}
            anchorSkuProduct={anchorSkuProduct}
          />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: "1rem", overflow: "auto" }}>
          <Container>
            <Content models={models} anchorSku={anchorSku} />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default AppContainer;
