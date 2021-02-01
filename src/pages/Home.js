import React from 'react';
import { Typography } from '@material-ui/core';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center'
    },
    sub: {
        fontWeight: 'normal',
        fontStyle: 'italic'
    }
};

const HomePage = () => {
    return (
    <div style={styles.container}>
        <Typography variant="h4">
            Welcome!
        </Typography>
        <Typography style={styles.sub} variant="h6">Here are the latest posts:</Typography>
    </div>);
}

export default HomePage;
