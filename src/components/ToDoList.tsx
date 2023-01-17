import { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

const toDoState = atom<IToDo[]>({
    key:"todo",
    default: [],
})

interface IForm{
    todo: string;
}
interface IToDo{
    text: string;
    id: number;
    category: "TO_DO"|"DOING"|"DONE";
}

const Title = styled.h1`
    color: white;
`
const Ul = styled.ul`
    color: white;
`
function ToDoList(){
    const [todos, setTodos] = useRecoilState(toDoState);
    /*   const value = useRecoilValue(toDoState);
    const modFn = useSetRecoilState(toDoState); */

    const {register, handleSubmit, setValue} = useForm<IForm>();
    const handleValid = ({todo}: IForm) =>{
        console.log('Add todo', todo);
        setTodos(oldToDos => [{text:todo, id:Date.now(), category:"TO_DO"},...oldToDos]);
        setValue("todo","");
    }
    console.log(todos);
    return <div>
        <Title>What's Your Plan?</Title>
        <hr />
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("todo", {
                required: "Please Write",
            })} placeholder="Write To Do" />
            <button>Add</button>
        </form>
        <Ul>
            {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </Ul>
    </div>;
}


export default ToDoList;
