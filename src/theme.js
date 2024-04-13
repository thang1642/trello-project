import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
//import { teal, cyan, deepOrange, orange } from '@mui/material/colors'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT ='58px'
const COLUMN_FOOTER_HEIGHT ='56px'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight:APP_BAR_HEIGHT,
    boardBarHeight:BOARD_BAR_HEIGHT,
    boardContentHeight:BOARD_CONTENT_HEIGHT,
    columnHeaderHeight:COLUMN_HEADER_HEIGHT,
    columnFooterHeight:COLUMN_FOOTER_HEIGHT
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
      MuiTypography: {
        styleOverrides: {
          root:{
            '&.MuiTyphography-body1': { fontsize:'0.875rem' }
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
