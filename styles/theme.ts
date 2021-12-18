import { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import createCache from "@emotion/cache";

export default function createEmotionCache() {
  return createCache({ key: "css" });
}

const options: ThemeOptions = {
    palette: {
      primary: {
        dark: '#4C8BF5',
        light: '#4C8BF5',
        main: '#4C8BF5',
        contrastText: '#ffffff'
      },
      secondary: {
        dark: '#4285F4',
        light: '#4285F4',
        main: '#4285F4'
      },
      background: {
        default: '#F5F7FA'
      }
    }
};

export const fontOptions = {
    family: 'Roboto',
    size: {
      xxSmall: '0.375em',
      xSmall: '0.625em',
      small: '1em',
      smallPlus: '1.125em',
      medium: '1.25em',
      mediumPlus: '1.625em',
      large: '2.1875em',
      xLarge: '3em'
    },
    weight: {
      lighter: 200,
      light: 300,
      normal: 400,
      bold: 500,
      bolder: 600,
    }
};

export const theme = createTheme(options);
