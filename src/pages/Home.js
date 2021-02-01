import React, { useState, useEffect } from 'react';
import { Divider, Typography, LinearProgress } from '@material-ui/core';

import { firestore } from '../services/firebase';
import PostDisplay from '../components/PostDisplay';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    sub: {
        fontWeight: 'normal',
        fontStyle: 'italic'
    }
};

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () =>  {
            setIsLoading(true);
            const response = await firestore.collection('posts').get();
            setPosts(response.docs.map((doc) => doc.data()));
            setIsLoading(false);
        };
        fetchPosts();
    }, []);
    return (
    <div style={styles.container}>
        <Typography variant="h4">
            Welcome!
        </Typography>
        <Typography style={styles.sub} variant="h6">Here are the latest posts:</Typography>
        {!isLoading ? <Divider variant="middle" /> : <LinearProgress />}
        {posts.map((post) => <PostDisplay key={JSON.stringify(post)} {...post} />)}
    </div>);
}

export default HomePage;
