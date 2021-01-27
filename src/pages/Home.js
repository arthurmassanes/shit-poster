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
        <Typography variant="h4">
            Welcome home dear user.
        </Typography>
        <Button style={{ alignSelf: 'center', width: '100px' }} color="primary" onClick={() => alert('clic')}>Click me</Button>
    </div>);
}

export default HomePage;
