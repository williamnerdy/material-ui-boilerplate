import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import deepOrange from '@material-ui/core/colors/deepOrange'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: deepOrange,
    background: {
      default: '#f5f5f5'
    }
  }
})

export default theme
