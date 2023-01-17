import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface IForm{
    todo: string;
}

function ToDoList(){
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const handleValid = (data: IForm) =>{
        console.log('Add todo', data.todo);
        setValue("todo","");
    }
    return <div>
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("todo", {
                required: "Please Write",
            })} placeholder="Write To Do" />
            <button>Add</button>
        </form>
    </div>;
}


export default ToDoList;
