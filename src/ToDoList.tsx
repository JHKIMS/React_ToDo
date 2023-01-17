import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

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
interface IForm {
  toDo: string;
  email: string;
  name: string;
  firstName: string;
  lastName?: string;
  userName: string;
  password: string;
  password1: string;
}
const ErrorSpan = styled.span`
    background-color: #636e72;
    color:white;
    // border: 1px solid #e17055;
`;

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
        email: "@gmail.com",
    }
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("toDo")} placeholder="Write To Do" />
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@gmail.com$/,
              message: "Only gmail.com email allowed",
            },
          })}
          placeholder="Email"
        /> <ErrorSpan>{errors?.email?.message}</ErrorSpan>
        <input
          {...register("firstName", { required: "Enter your firstname" })}
          placeholder="FirstName"
        /> <ErrorSpan>{errors?.firstName?.message}</ErrorSpan>
        <input
          {...register("lastName", { required: "Enter your lastName" })}
          placeholder="LastName"
        /> <ErrorSpan>{errors?.lastName?.message}</ErrorSpan>
        <input
          {...register("userName", { required: "Enter your userName", minLength: 5 })}
          placeholder="userName"
        /> <ErrorSpan>{errors?.userName?.message}</ErrorSpan>
        <input
          {...register("password", {
            required: "Password is Required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          placeholder="Password"
        /> <ErrorSpan>{errors?.password?.message}</ErrorSpan>
        <input
          {...register("password1", { required: "Please check your password" })}
          placeholder="Password1"
        /> <ErrorSpan>{errors?.password1?.message}</ErrorSpan>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
