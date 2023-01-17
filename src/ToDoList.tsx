import { useState } from "react";
import { useForm } from "react-hook-form";

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

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {};

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("toDo")} placeholder="Write To Do" />
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("firstName", { required: true })}
          placeholder="FirstName"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="LastName"
        />
        <input
          {...register("userName", { required: true, minLength: 5 })}
          placeholder="userName"
        />
        <input
          {...register("password", {
            required: "Password is Required",
            minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
            },
          })}
          placeholder="Password"
        />
        <input
          {...register("password1", { required: true })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
