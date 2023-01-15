import  React from 'react';
import './TodoList.css';
interface Props{
    items: {id: string, text: string}[];
    onDeleteTodo: (id: string) => void;
}

const TodoList = (props: Props) => {
    
    return (
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
                </li>
            ))}
        </ul>
    );
};



export default TodoList;