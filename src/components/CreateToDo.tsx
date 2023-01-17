import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

function CreateToDo() {
  interface IForm {
    todo: string;
  }

  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ todo }: IForm) => {
    console.log("Add todo", todo);
    setToDos((oldToDos) => [
      { text: todo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("todo", "");
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
