import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Title = styled.h1`
  color: white;
`;
const Ul = styled.ul`
  color: white;
`;
function ToDoList() {
  const todos = useRecoilValue(toDoState);
  /*   const value = useRecoilValue(toDoState); === todos
    const modFn = useSetRecoilState(toDoState);  === setTodos(CreateToDo.tsx)*/
  console.log(todos);
  return (
    <div>
      <Title>What's Your Plan?</Title>
      <hr />
      <CreateToDo />
      <Ul>
        {todos.map((todo) => (
            <ToDo key={todo.id} {...todo}/>
        // 위의 코드와 동일하다. <ToDo text={todo.text} category={todo.category} id={todo.id} />
        ))}
      </Ul>
    </div>
  );
}

export default ToDoList;
