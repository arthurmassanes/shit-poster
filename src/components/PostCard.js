import React, { useState } from 'react';
import {
    Paper,
    TextField,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Button
} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CircularProgress from '@material-ui/core/CircularProgress';
import firebase, { firestore, storage } from '../services/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { maxPostCharacters } from '../constants/post';
import PostImage from '../components/PostImage';

const styles = {
    nameInput: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '3%',
        justifyContent: 'flex-start'
    },
    container: {
        padding: '5%', margin: '5%',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: 42
    },
    button: { color: 'white', marginTop: '3%' }
}

const emptyImage = {
    file: undefined,
    url: undefined,
}

const PostCard = () => {
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');
    const [anonymous, setAnonymous] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ author: undefined, message: undefined });
    const [image, setImage] = useState(emptyImage);

    const isEmpty = (str) => !str || str.trim() === '';

    const handleCheckbox = (e) => {
        const checked = e.target.checked;
        setAnonymous(checked);
        setAuthor(checked ? 'Anonymous shit-poster' : '');
    }

    const handleMessage = (e) => {
        e.target.value.length <= maxPostCharacters && setMessage(e.target.value);
    }

    const postMessage = async () => {
        if (isEmpty(author) || (isEmpty(message) && !image.file)) { // allow empty message if there's an image
            isEmpty(author) && setError({ ...error, author: 'Please enter a name' });
            isEmpty(message) && setError({ ...error, message: 'Do you not want to share a post?' })
            return;
        } else setError({ author: undefined, message: undefined })
        setIsLoading(true);
        try {
            let url;
            if (image.file) {
                const uploadTask = await storage.ref(`images/${image.file.name}`).put(image.file);
                url = await uploadTask.ref.getDownloadURL();
                setImage({ ...image, url });
            };
            await firestore.collection('posts').add({
                author,
                message,
                anonymous,
                ...(url && { imageUrl: url }), // spread imageUrl only if defined
                date: firebase.firestore.Timestamp.fromDate(new Date()) // generate a timestamp from current date
            })
        } catch (e) { console.error(e) }
        setIsLoading(false);
        toast(`Post sucessfully uploaded ! Thank you ${author} !`);
        setImage(emptyImage);
        setMessage('');
    }

    return (<Paper elevation={10} style={styles.container}>
        <FormGroup>
        <div style={styles.nameInput}>
            <TextField
                label="Name"
                error={Boolean(error.author)}
                helperText={error.author}
                disabled={anonymous}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                style={{ marginRight: '1%' }}
                variant="outlined"
            />
            <FormControlLabel
                control={<Checkbox onChange={handleCheckbox} name="isAnonymous" color="primary" />}
                label="Anonymous"
            />
        </div>
        <TextField
            onChange={handleMessage}
            label={`Message (${message.length || 0}/${maxPostCharacters})`}
            variant="outlined"
            error={Boolean(error.message)}
            helperText={error.message}
            value={message}
            multiline
        />
        <PostImage setFile={file => setImage({ ...image, file })} />
        <Button
            size="large"
            startIcon={!isLoading && <PostAddIcon />}
            style={styles.button}
            onClick={postMessage}
        >
            {isLoading ? <CircularProgress color="secondary" /> : 'Post'}
        </Button>
        </FormGroup>
        <ToastContainer />
    </Paper>);
}

export default PostCard;
