import React from 'react';
import { Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import TimeAgo from 'javascript-time-ago';

import theme from '../constants/colors';
import PostReply from './ReplyComponent';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '3%',
        margin: '3%',
        borderRadius: 42,
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
    message: {
    },
    image: {
        maxHeight: '100%',
        maxWidth: '100%',
        width: 'auto',
        height: 'auto',
    },
    imageContainer: {
    }
}

const PostDisplay = (props) => {
    const { author, message, date, anonymous, imageUrl, isReply } = props;

    const formattedDate = date ? `${new TimeAgo('en-US').format(date?.toDate())} (${date?.toDate().toLocaleString('en-GB')})` : '';
    return (<Paper style={styles.container} elevation={10}>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar style={styles.avatar}>
                        {!anonymous ? author[0] : <HelpIcon />}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={author} secondary={formattedDate || ''} />
            </ListItem>
            <ListItem style={styles.message}>
                <ListItemText primary={message} />
            </ListItem>
            {imageUrl && <ListItem styles={styles.imageContainer}>
                <a target="_blank" rel="noopener noreferrer" href={imageUrl}>
                    <img alt="" style={styles.image} src={imageUrl} />
                </a>
            </ListItem>}
            {!isReply && <PostReply {...props} />}
        </List>
    </Paper>);
}

PostDisplay.defaultProps = {
    author: '',
    message: '',
    imageUrl: undefined,
    isReply: false
}

export default PostDisplay;
