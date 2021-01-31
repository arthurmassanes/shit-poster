import React from 'react';
import { Button, Typography } from '@material-ui/core';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center'
    }
};

const HomePage = () => {
    return (
    <div style={styles.container}>
        <Typography stlye={{ fontSize: 100, color: 'white' }} variant="h4">
            Welcome!
        </Typography>
        <Button 
        variant="contained"
        style={{ alignSelf: 'center', width: '200px' }} color="primary">Cliquez ici</Button>
        <Button 
        variant="contained"
        style={{ alignSelf: 'center', width: '200px', marginTop: 20 }} color="secondary">Cliquez ici</Button>
                <Button 
        variant="contained"
        style={{ alignSelf: 'center', width: '200px', marginTop: 20 }} color="inherit">Cliquez ici</Button>
    </div>);
}

export default HomePage;
