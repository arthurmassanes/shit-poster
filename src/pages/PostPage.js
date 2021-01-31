import React from 'react';
import { Typography } from '@material-ui/core';

import PostCard from '../components/PostCard';

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
            Create a post
        </Typography>
        <PostCard />
    </div>);
}

export default PostPage;
