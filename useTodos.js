import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-use-reducer/todoReducer';

//INICIALIZA EL LOCAL STORAGE CON LO QUE TENIA EN ESE MOMENTO
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];       //Tiene que estar parseado xq lo maneja JS, no el navegador
}


export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );      //Pares de valores localStorage
    }, [todos])


    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,

        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}