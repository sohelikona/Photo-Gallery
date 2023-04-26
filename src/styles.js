import { CardContent } from '@mui/material';
// import { styled } from '@mui/material/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';




const useStyles = createMuiTheme((theme) => ({
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px',
    },
    buttons: {
        marginTop: '40px'
    },
    cardGrid: {
      padding: '20px 0'
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardMedia: {
      paddingTop: '56.25%'
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

  export default createMuiTheme;