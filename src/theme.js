import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
//import { teal, cyan, deepOrange, orange } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight:'58px',
    boardBarHeight:'60px'
  },
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
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
      // Name of the slot
        root: {
        // Some CSS
          textTransform : 'none',
          borderWidth: '0.5px',
          '&:hover': {
            borderWidth:'0.5px'
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides:{
        body:{
          '*::-webkit-scrollbar': {
            width:'8px',
            height:'8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor:'#dcdde1',
            borderRadius:'8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor:'white'
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
        // Name of the slot
          root:{
            //color: theme.palette.primary.main,
            fontsize: '0.875rem'
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
        // Name of the slot
          root: {
          // Some CSS
            //color: theme.palette.primary.main,
            fontsize: '0.875rem',
            // '.MuiOutlinedInput-notchedOutline':{
            //   borderColor: theme.palette.primary.light
            // },
            // '&:hover': {
            //   '.MuiOutlinedInput-notchedOutline':{
            //     borderColor: theme.palette.primary.main
            //   }
            // },
            '& fieldset': {borderWidth: '0.5px !important' },
            '&:hover fieldset': {borderWidth: '1px !important' },
            '&.Mui-focused fieldset': {borderWidth: '1pxpx !important' }
          }
        }
      }
    }
  }
})
export default theme
