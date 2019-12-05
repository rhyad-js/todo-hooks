import React from 'react';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';
import { ListItem, ListItemText, Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const Todo = (props) => {
    const [isEditing, toggle] = useToggle();
    return (
        <ListItem style={{height: "64px"}}>
            {isEditing 
            ? 
            <>
                <EditTodoForm id={props.id} task={props.task} editTodo={props.editTodo} toggle={toggle} /> 
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit" onClick={toggle}>
                        <EditIcon />
                    </IconButton> 
                </ListItemSecondaryAction>
            </>
            :
            <>
                <Checkbox tabIndex={-1} checked={props.completed} onClick={() => props.toggleTodo(props.id)} />
                <ListItemText style={{textDecoration: props.completed ? "line-through" : "none"}}>
                    {props.task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => props.removeTodo(props.id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={toggle}>
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}

export default Todo;