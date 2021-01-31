import React, { useState } from 'react';
import {
    Paper,
    Typography,
    TextField,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Button
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const styles = {
    nameInput: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '5%',
        marginBottom: '5%'
    },
    container: {
        padding: '5%', margin: '10%',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-around'
    },
}

const PostCard = () => {
    const [message, setMessage] = useState('');
    return (<Paper elevation={10} style={styles.container}>
        <FormGroup>
        <Typography variant="h4">What is on your mind ?</Typography>
        {/* <Divider variant="middle" style={{ margin: '3%'}} /> */}
        <div style={styles.nameInput}>
            <TextField
                label="Name"                
                variant="outlined"
            />
            <FormControlLabel
                control={<Checkbox name="isAnonymous" color="primary" />}
                label="Anonymous"
            />
        </div>
        <TextField
            onChange={(evt) => setMessage(evt.target.value)}
            label={`Message (${message.length || 0}/25)`}
            variant="outlined"
            multiline
        />
        <Button size="large" startIcon={<EditIcon size={25} />} style={{ color: 'white'}}>Post</Button>
        </FormGroup>
    </Paper>);
}

export default PostCard;
