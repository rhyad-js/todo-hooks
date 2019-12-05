import React, { useState } from 'react';
import useInputState from './hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

export default function TodoForm({addTodo}) {
    const [text, setText, resetText] = useInputState("");
    return (
        <Paper style={{margin:"1rem 0", padding:"0 1rem"}}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(text);
                resetText();
            }}>
                <TextField 
                    value={text} 
                    onChange={setText} 
                    margin="normal" 
                    label="Add new TODO" 
                    fullWidth 
                />
            </form>
        </Paper>
    )
}