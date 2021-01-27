import React from 'react'; 
import { Link, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(63,94,251)',
      mainGradient: 'linear-gradient(117deg, rgba(63,94,251,1) 0%, rgba(0,255,113,1) 100%, rgba(0,116,217,1) 100%)',
    },
  },
});

const Navbar = () => {
    const history = useHistory();
    return (
    <div style={{ flexGrow: 1 }}>
        <AppBar position="sticky" style={{ background: theme.palette.primary.mainGradient }}>
          <Toolbar>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                <Typography variant="h6">Shit-Poster</Typography>
              </Link>
            <Button style={{ marginLeft: '5%'}} onClick={() => history.push('/post')} color="inherit">
                <EditIcon size={25} />
                Create post
            </Button>
          </Toolbar>
        </AppBar>
      </div>);
}

export default Navbar;
