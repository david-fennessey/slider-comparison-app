import { blue, green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 2,
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontSize: 11,
  },
});

export default theme;
