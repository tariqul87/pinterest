import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0288d1",
      contrastText: "#000000",
    },
    secondary: {
      main: "#9fa8da",
      contrastText: "#000000",
    },
  },
});

export default theme;
