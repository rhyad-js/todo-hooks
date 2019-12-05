import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

const EditTodoForm = (props) => {
    const [editText, setEditText, resetEditText] = useInputState(props.task);
    return (
        <form onSubmit={e => {
                e.preventDefault();
                props.editTodo(props.id, editText);
                resetEditText();
                props.toggle();
            }}
            style={{marginLeft: "1rem", width: "50%"}}
        >
            <TextField margin="normal" value={editText} onChange={setEditText} fullWidth autoFocus />
        </form>
    )
}

export default EditTodoForm;