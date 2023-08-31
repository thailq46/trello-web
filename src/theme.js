import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  //Custom light - dark mode
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange
    //   }
    // }
  },
  // ...other properties
  components: {
    //Ghi đè lên style có sẵn của MUI
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderWidth: '0.5px',
          '&:hover': { borderWidth: '1.5px' }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        //Viết hàm để ta có thể lấy giá trị của theme để sửa
        root: {
          fontSize: '0.875rem',
          // '.MuiOutlinedInput-notchedOutline': {
          //   borderColor: theme.palette.primary.light
          // },
          // '&:hover': {
          //   '.MuiOutlinedInput-notchedOutline': {
          //     borderColor: theme.palette.primary.main
          //   }
          // },
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '2px !important' },
          '&.Mui-focused fieldset': { borderWidth: '1px !important' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        }
      }
    },
    //Dùng CssBaseline nhất quán giữa tất cả các trình duyệt
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': { width: '3px', height: '4px' },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': { backgroundColor: 'white' }
        }
      }
    }
  }
})

export default theme
