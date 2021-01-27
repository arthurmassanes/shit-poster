import React from 'react';
import { Typography } from '@material-ui/core';

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    }
};

const PostPage = () => {
    return (
    <div style={styles.container}>
        <Typography variant="h4">
            Yes this is the post page :P
        </Typography>
    </div>);
}

export default PostPage;
