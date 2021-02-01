import React from 'react';
import { Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';

import theme from '../constants/colors';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1%',
        margin: '2%',
        borderRadius: 42
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
    message: {
    }
}

const PostDisplay = (props) => {
    const { author, message, date, anonymous } = props;
    return (<Paper style={styles.container} elevation={10}>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar style={styles.avatar}>
                        {!anonymous ? author[0] : <HelpIcon />}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={author} secondary={date?.toDate().toLocaleString('en-GB')} />
            </ListItem>
            <ListItem style={styles.message}>
                <ListItemText primary={message} />
            </ListItem>
        </List>
    </Paper>);
}

export default PostDisplay;
