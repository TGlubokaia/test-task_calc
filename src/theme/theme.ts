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
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
        },
      },
      defaultProps: {
        inputProps: {
          readOnly: true,
          style: {
            paddingTop: '4px',
            paddingRight: '8px',
            paddingBottom: '4px',
            paddingLeft: '8px',
            fontWeight: '800',
            fontSize: '36px',
            lineHeight: '44px',
            textAlign: 'end',
          }
        },
        InputProps: {
          disableUnderline: true,
          style: {
            borderRadius: '6px',
          }
        },
        fullWidth: true,
      },
      variants: [{
        props: { variant: 'filled' },
        style: {
          color: '#111827',
          backgroundColor: '#F3F4F6',
        }
      }]
    }, 
  },
});

export default theme;

