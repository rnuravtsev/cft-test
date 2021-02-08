import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: `#A783CB`,
      main: `#734F96`,
      dark: `#3E1A62`
    },
    // Secondary A
    secondary: {
      light: `#EFE993`,
      main: `#DED86D`,
      dark: `#908A23`
    },
    // Secondary B
    minor: {
      light: `#D080BF`,
      main: `#A24F8F`,
      dark: `#691A58`
    },

    gray: {
      light: `#D3D3D3`,
      main: `#808080`,
      dark: `#525F7F`
    },
    white: {
      main: `#FFFFFF`
    }
  }
});
