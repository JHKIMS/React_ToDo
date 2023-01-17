import { useState } from "react";

function ToDoList(){
    const [todo, setTodo] = useState("");
    const onChangeFunc= (event:React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setTodo(todo);
    };
    const onSubmitFunc = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(todo);
    }
    return <div>
        <form onSubmit={onSubmitFunc}>
            <input onChange={onChangeFunc} value={todo} placeholder="Write To Do" />
            <button>Add</button>
        </form>
    </div>;
}

export default ToDoList;