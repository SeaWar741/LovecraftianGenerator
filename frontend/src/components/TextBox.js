import React from 'react';
import { TextField } from '@material-ui/core';

const styles = theme => ({
    multilineColor:{
        color:'whitesmoke'
    }
});

const TextBox = ({ text, setText }) => (
    <div>
        <h3 style={{paddingTop:'1rem'}}>Write something...</h3>
        <TextField
            margin='normal'
            variant="outlined"
            fullWidth
            multiline
            rows='4'
            value={text}
            onChange={e => setText(e.target.value)}
            style={{backgroundColor:'whitesmoke'}}
        />
    </div>
);

export default TextBox;
