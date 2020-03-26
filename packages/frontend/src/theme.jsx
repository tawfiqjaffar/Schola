import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#70C6C7', contrastText: '#212121' },
  secondary: { main: '#60c07a', contrastText: '#FAFAFA' },
  text: {
    primary: '#212121',
    secondary: '#FAFAFA',
  },
  background: {
    paper: '#70C6C7',
  },
};
const themeName = 'Downy Pastel Green Gayal';

export default createMuiTheme({ palette, themeName });
