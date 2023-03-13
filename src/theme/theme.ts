import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
        },
      },
    },
  },
});

export default theme;
