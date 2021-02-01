import React from 'react'; 
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';

import theme from '../constants/colors';
import CreatePostButton from './CreatePostButton';

const styles = {
  link: { textDecoration: 'none', color: 'white' },
  button: { marginLeft: '2%' },
  homeIcon: { marginTop: 3 }
}

const Navbar = () => {
    return (
    <div style={{ flexGrow: 1 }}>
        <AppBar position="sticky" style={{ marginBottom: '2%', background: theme.palette.primary.mainGradient }}>
          <Toolbar>
              <Link style={styles.link} to="/">
                <Typography style={styles.title} variant="h6">
                  <HomeIcon fontSize="inherit" style={styles.homeIcon} />
                  Shit-Poster
                </Typography>
              </Link>
              <CreatePostButton style={styles.button} />
          </Toolbar>
        </AppBar>
      </div>);
}

export default Navbar;
