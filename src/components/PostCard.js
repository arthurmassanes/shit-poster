import React, { useState } from 'react';
import {
    Paper,
    TextField,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Button
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { maxPostCharacters } from '../constants/post';

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
        justifyContent: 'space-around'
    },
    button: { color: 'white', marginTop: '3%' }
}

const PostCard = () => {
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');
    const [anonymous, setAnonymous] = useState(false);

    const handleCheckbox = (e) => {
        const checked = e.target.checked;
        setAnonymous(checked);
        setAuthor(checked ? 'Anonymous shit-poster' : '');
    }

    const handleMessage = (e) => {
        e.target.value.length <= maxPostCharacters && setMessage(e.target.value);
    }

    const postMessage = () => {
        console.log(author, message);
    }

    return (<Paper elevation={10} style={styles.container}>
        <FormGroup>
        <div style={styles.nameInput}>
            <TextField
                label="Name"
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
            value={message}
            multiline
        />
        <Button
            size="large"
            startIcon={<EditIcon size={25} />}
            style={styles.button}
            onClick={postMessage}
        >
            Post
        </Button>
        </FormGroup>
    </Paper>);
}

export default PostCard;
