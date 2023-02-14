import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

function CreateToDo() {
  interface IForm {
    todo: string;
  }

  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ todo }: IForm) => {
    console.log("Add todo", todo);
    setValue("todo", "");
    setToDos((current:any) => [{text: todo, category, id:Date.now()}, ...current]);
  };
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
