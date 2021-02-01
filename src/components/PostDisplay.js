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
    }
}

const PostDisplay = (props) => {
    const { author, anonymous } = props;
    return (<Paper style={styles.container} elevation={10}>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar style={styles.avatar}>
                        {!anonymous ? author[0] : <HelpIcon />}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={author} secondary="Jan 9, 2014" />
            </ListItem>
        </List>
    </Paper>);
}

export default PostDisplay;
