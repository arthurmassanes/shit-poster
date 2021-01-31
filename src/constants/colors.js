import { createMuiTheme } from '@material-ui/core';

const gradient = 'linear-gradient(90deg, #515ada 0%, #efd5ff 100%)'
const main = '#515ada';
const secondary = '#efd5ff'

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Montserrat, Arial',
        fontWeightMedium: 600,
        fontSize: 18,
    },
    palette: {
        primary: {
            main,
            contrastText: '#FFFFFF',
            mainGradient: gradient
        },
        secondary: {
            main: secondary
        }
    },
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
          // Name of the rule
          text: {
            // Some CSS
            background: gradient,
          },
        },
      },
});

export default theme;
