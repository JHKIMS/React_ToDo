import { useState } from "react";
import {useForm} from "react-hook-form";

/* function ToDoList(){
    const [todo, setTodo] = useState("");
    const [todoError, setTodoError] = useState("");

    const onChangeFunc= (event:React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setTodoError("");
        setTodo(value);
    };
    const onSubmitFunc = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(todo.length < 10) {
            return setTodoError("To do should be at least 10");
        }
        console.log("submit");
    }
    return <div>
        <form onSubmit={onSubmitFunc}>
            <input onChange={onChangeFunc} value={todo} placeholder="Write To Do" />
            <button>Add</button>
            { todoError !== "" ? todoError : null }
        </form>
    </div>;
} */

function ToDoList(){
    const {register, watch} = useForm();
    console.log(register("toDo"));
    return <div>
    <form>
        
        <input {...register("toDo")} placeholder="Write To Do" />
        <input {...register("email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="FirstName" />
        <input {...register("lastName")} placeholder="LastName" />
        <input {...register("userName")} placeholder="userName" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password1")} placeholder="Password1" />
        <button>Add</button>

    </form>
</div>;
}

export default ToDoList;