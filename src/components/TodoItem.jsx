import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";
import { toggleTodoComplete } from "../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {

    const dispatch = useDispatch();
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleTodoComplete({ id }))}
            />
            <span className='todoText'>{text}</span>
            <span className='delete' onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
        </li>
    )
}

export default TodoItem