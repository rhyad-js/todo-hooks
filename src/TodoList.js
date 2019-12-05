import React, { useState } from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { Divider } from '@material-ui/core';

export default function TodoList(props) {
    if (props.todos.length) 
        return (
            <Paper>
                <List>
                    {props.todos.map((todo, i) => (
                        <>
                            <Todo 
                                {...todo}
                                removeTodo={props.removeTodo}
                                toggleTodo={props.toggleTodo}
                                editTodo={props.editTodo}
                            />
                            {i < props.todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        )
    return null;
}