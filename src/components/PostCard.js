import React, { useState } from 'react';
import {
    Paper,
    TextField,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Button,
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

const PostCard = ({ replyId }) => {
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');
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
        console.log(replyId)
        if (isEmpty(author) || (isEmpty(message) && !image.file)) { // allow empty message if there's an image
            isEmpty(author) && setError({ ...error, author: 'Please enter a name' });
            isEmpty(message) && setError({ ...error, message: 'Do you not want to share a post?' })
            return;
        } else setError({ author: undefined, message: undefined })
        setIsLoading(true);
        try {
            let url;
            if (image.file) {
                const uploadTask = await storage.ref(`images/${Date.now()}${image.file.name}`).put(image.file);
                url = await uploadTask.ref.getDownloadURL();
                setImage({ ...image, url });
            }
            const newPost = {
                author,
                message,
                ...(email && { email }),
                anonymous,
                ...(url && { imageUrl: url }), // spread imageUrl only if defined
                date: firebase.firestore.Timestamp.fromDate(new Date()) // generate a timestamp from current date
            };
            const ref = firestore.collection('posts');
            if (replyId) ref.doc(replyId).update({ comments: firebase.firestore.FieldValue.arrayUnion(newPost) })
            else await firestore.collection('posts').add(newPost)
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
        {!anonymous && !replyId && <TextField
            label="Email (optional - not displayed)"
            helperText="Enter your email address if you want to be notified when someone comments on your post."
            disabled={anonymous}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginRight: '1%' }}
            variant="outlined"
        />}
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
            variant="contained"
            color="primary"
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

PostCard.defaultProps = {
    replyId: undefined
}

export default PostCard;
