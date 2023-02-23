import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  bigCategoryState,
  Categories,
  categoryState,
  toDoSelector,
} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Title = styled.h1`
  color: white;
`;
const Wrapper = styled.div`
	padding: 0 2rem;
	max-width: 30rem;
	margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ToDoList() {
  const todos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const [bigCategory, setBigCategory] = useRecoilState(bigCategoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as unknown as Categories);
  };

  // 큰 카테고리 추가하는 부분.
  const addBigCategory = () => {
    const newBigCategory = prompt("New BigCategory", "");
    if (newBigCategory) {
      if (bigCategory.includes(newBigCategory)) {
        alert("Already Exist This BigCategory");
        return;
      }

      setBigCategory([...bigCategory, newBigCategory]);
      setCategory(newBigCategory);
    }
  };
  const onClick = (category: string) => {
    setCategory(category);
  };

  useEffect(() => {
    localStorage.setItem("bigCategory", JSON.stringify(bigCategory));
  }, [bigCategory]);

  console.log(category);
  console.log(todos);
  /*   const value = useRecoilValue(toDoState); === todos
    const modFn = useSetRecoilState(toDoState);  === setTodos(CreateToDo.tsx)*/
  return (
    <Wrapper>
      <div>
        <Title>What's Your Plan?</Title>
        <button onClick={addBigCategory} style={{marginBottom:'20px'}}>+BigCategory</button>
        {/* <select value={category} onChange={onInput}>
        {bigCategory.map((activeBigCategory)=>(
          <option key={activeBigCategory} value={activeBigCategory}>
            <button
              onClick={() => onClick(activeBigCategory)}
              disabled={activeBigCategory === category}
            >
              {activeBigCategory}
            </button>
          </option>
        ))}
      </select> */}
        <select value={category} onChange={onInput}>
          {bigCategory.map((activeBigCategory) => (
            <option key={activeBigCategory} value={activeBigCategory}>
              {activeBigCategory}
            </option>
          ))}
        </select>

        <ul style={{ display: "flex" }}>
          {bigCategory.map((activeBigCategory) => (
            <li
              key={activeBigCategory}
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <button
                onClick={() => onClick(activeBigCategory)}
                disabled={activeBigCategory === category}
              >
                {activeBigCategory}
              </button>
            </li>
          ))}
        </ul>
        <CreateToDo />
        {todos?.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
        {/* <h2>To do</h2>
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
      <hr /> */}
      </div>
    </Wrapper>
  );
}

export default ToDoList;
