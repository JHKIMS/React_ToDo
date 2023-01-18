import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Title = styled.h1`
  color: white;
`;
const Ul = styled.ul`
  color: white;
`;
function ToDoList() {
  const [todo, doing, done] = useRecoilValue(toDoSelector);

  /*   const value = useRecoilValue(toDoState); === todos
    const modFn = useSetRecoilState(toDoState);  === setTodos(CreateToDo.tsx)*/
  return (
    <div>
      <Title>What's Your Plan?</Title>
      <hr />
      <CreateToDo />
      <h2>To do</h2>
      <Ul>
        {todo.map((todo) => (
            <ToDo key={todo.id} {...todo}/>
        // 위의 코드와 동일하다. <ToDo text={todo.text} category={todo.category} id={todo.id} />
        ))}
      </Ul>
      <hr />
      <h2>Doing</h2>
      <Ul>
        {doing.map((todo) => (
            <ToDo key={todo.id} {...todo}/>
        // 위의 코드와 동일하다. <ToDo text={todo.text} category={todo.category} id={todo.id} />
        ))}
      </Ul>
      <hr />
      <h2>Done</h2>
      <Ul>
        {done.map((todo) => (
            <ToDo key={todo.id} {...todo}/>
        // 위의 코드와 동일하다. <ToDo text={todo.text} category={todo.category} id={todo.id} />
        ))}
      </Ul>
      <hr />
    </div>
  );
}

export default ToDoList;
