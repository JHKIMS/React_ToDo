import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

function CreateToDo() {
  interface IForm {
    todo: string;
  }

  const category = useRecoilValue(categoryState);
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ todo }: IForm) => {
    console.log("Add todo", todo);
    setValue("todo", "");
    setToDos((current:any) => [{text: todo, category, id:Date.now()}, ...current]);
  };
  useEffect(() => {
		localStorage.setItem("toDos", JSON.stringify(toDos));
	}, [toDos]);
  
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", {
          required: "Please Write",
        })}
        placeholder="Write To Do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
