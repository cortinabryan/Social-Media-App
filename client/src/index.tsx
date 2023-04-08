import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { red, green, purple } from "@mui/material/colors";

// Typography
declare module "@mui/material/styles" {
  interface TypographyVariants {
    myVariant: React.CSSProperties;
    // myCustomColor: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    myVariant?: React.CSSProperties;
    // myCustomColor?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    myVariant: true;
    // myCustomColor: true;
    h3: false;
  }
}

// Palette

interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
  myCustomColor?: any;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#ccc",
    },
    secondary: {
      main: red[500],
    },
    // myCustomColor: {
    //   main: green{500}
    // },
  },
  typography: {
    myVariant: {
      fontSize: "5rem",
      color: purple[500],
    },
    // myVariant: {
    //   fontSize: "2rem",
    // },
  },
});

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
