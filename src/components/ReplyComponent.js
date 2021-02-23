import React, { useState } from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AddCommentIcon from '@material-ui/icons/AddComment';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import PostDisplay from './PostDisplay';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PostCard from '../components/PostCard';

const styles = {
    button: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    container: {
        // display: 'flex',
        // flexDirection: 'column',
    },
    title: {
        display: 'flex',
        padding: '1%',
    },
    drawer: {
    }
}

const PostReply = (props) => {
    const [tab, setTab] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleChange = (event, newValue) => setTab(newValue);

    const { comments, author, id } = props;
    return (<div style={styles.container}>
        <Button onClick={() => setIsDrawerOpen(true)} style={styles.button} color="primary" size="small">
            <ChatBubbleOutlineIcon style={{ paddingRight: '1%' }} fontSize="inherit" />
            <p>View replies to {author}'s post</p>
        </Button>
        <Drawer
            width="100%"
            style={styles.drawer}
            anchor="top"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
        >
        <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            centered
        >
                <Tab label="Comments" icon={<ChatBubbleOutlineIcon />}/>
                <Tab label="Post a comment" icon={<AddCommentIcon />}/>
            </Tabs>
            {tab === 0
            ? <div>
                {comments.length <= 0 && <Typography style={styles.title}>No comments on this post!</Typography>}
                {comments.map((c) => <PostDisplay isReply key={c.message} {...c} />)}
            </div>
            :<PostCard replyId={id} />}
        </Drawer>
    </div>);
}

PostReply.defaultProps = {
    comments: []
}

export default PostReply;
