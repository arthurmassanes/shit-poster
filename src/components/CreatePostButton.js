import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const CreatePostButton = (props) => {
    const { style } = props;
    const history = useHistory();
    return (
    <Button
        variant="outlined"
        color="inherit"
        startIcon={<EditIcon />}
        style={style}
        onClick={() => history.push('/post')}>
        Create post
    </Button>
);
};

export default CreatePostButton;
