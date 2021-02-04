import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const styles = {
    container: {
        display: 'flex',
        marginTop: '3%',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    button: { marginRight: '3%', height: '80%', fontSize: '1.5vw' }
};

const PostImage = ({ setFile }) => {
    const emptyImage = { file: undefined };
    const [image, setImage] = useState(emptyImage);

    const handleImageSelect = (e) => {
        const imageFile = e.target.files[0];
        if (!imageFile.type.includes('image')) alert('Error: file is not an image');
        else {
            setImage({ ...image, file: imageFile });
            setFile(imageFile);
        }
    }

    const removeFile = () => {
        setImage(emptyImage);
        setFile(undefined);
    }

    return (<div style={styles.container}>
    <Button
        variant="contained"
        startIcon={<CloudUploadIcon />}
        color="secondary"
        style={styles.button}
        component="label"
    >
    Select image
    <input
        type="file"
        hidden
        onChange={handleImageSelect}
    />
    </Button>
    {image.file &&
        <Button
            variant="contained"
            startIcon={<DeleteForeverIcon />}
            style={styles.button}
            onClick={removeFile}
        >
        Remove image
    </Button>}
    <Typography>{image.file
    ? `Selected ${image.file.name} (${image.file.size / 1000} kB)` // divide by 1000 to get kb from bytes
    : '(Optional) Select an image to upload it with this post'}</Typography>
    </div>);
}

export default PostImage;
