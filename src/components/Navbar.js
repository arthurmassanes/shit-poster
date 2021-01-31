import React from 'react'; 
import { Link, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import theme from '../constants/colors';

const styles = {
  link: { textDecoration: 'none', color: 'white' },
  button: { marginLeft: '2%' },
}

const Navbar = () => {
    const history = useHistory();
    return (
    <div style={{ flexGrow: 1 }}>
        <AppBar position="sticky" style={{ background: theme.palette.primary.mainGradient }}>
          <Toolbar>
              <Link style={styles.link} to="/">
                <Typography variant="h6">Shit-Poster</Typography>
              </Link>
            <Button
            variant="outlined"
            color="inherit"
              startIcon={<EditIcon size={25} />}
              style={styles.button}
              onClick={() => history.push('/post')}>
                Create post
            </Button>
          </Toolbar>
        </AppBar>
      </div>);
}

export default Navbar;
