import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { red, green, purple } from "@mui/material/colors";
import { BrowserRouter } from "react-router-dom";

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

  // Palette - Or try to add it lol
  interface Palette {
    myCustomColor: Palette["primary"];
    // myCustomColor2: Palette["primary"];
    superDark: Palette["primary"];
  }
  interface PaletteOptions {
    myCustomColor?: PaletteOptions["primary"];
    myCustomColor2?: PaletteOptions["primary"];
  }

  // interface PaletteColor {
  //   superDark: any;
  // }
}

// interface Palette {
//     custom: Palette["primary"];
//   }
//   interface PaletteOptions {
//     custom: PaletteOptions["primary"];
//   }

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    myVariant: true;
    myCustomColor: true;
    // h3: false;
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
      main: "#234E70",
    },
    secondary: {
      main: "#EEA47FFF",
    },
    myCustomColor: {
      main: green[500],
      superDark: green[800],
      superLight: green[100],
    } as any,
    myCustomColor2: {
      main: red[500],
      superDark: red[800],
      superLight: red[100],
    } as any,
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
  // spacing: 1, // default is 4 apparently lol
});

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
