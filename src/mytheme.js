import { createTheme } from "@mui/material";
import { blue, orange, purple } from "@mui/material/colors";

// https://mui.com/material-ui/customization/theming/
// https://youtu.be/fzxEECHnsvU?t=856
export const mytheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      light: "#c87630"
    },
    secondary: {
      main: blue[300]
    },
    otherColor: {
      main: "skyblue"
    }
  },
  status: {
    danger: purple[500]
  },
});
