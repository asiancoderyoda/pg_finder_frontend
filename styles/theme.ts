import { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';

export default function createEmotionCache() {
  return createCache({ key: 'css' });
}

const options: ThemeOptions = {
  palette: {
    primary: {
      dark: '#006464',
      light: '#39a58b',
      main: '#4eb29a',
      contrastText: '#ffffff',
    },
    secondary: {
      dark: '#cfe1b9',
      light: '#dcebca',
      main: '#e9f5db',
    },
    background: {
      default: '#F5F7FA',
    },
  },
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
    xLarge: '3em',
  },
  weight: {
    lighter: 200,
    light: 300,
    normal: 400,
    bold: 500,
    bolder: 600,
  },
};

export const theme = createTheme(options);
