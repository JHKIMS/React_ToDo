import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState, bigCategoryState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const bigCategory = useRecoilValue(bigCategoryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = {
        text,
        id,
        category: name as unknown as IToDo["category"],
      };
      console.log(
        "replace the to do in the index",
        targetIndex,
        "with",
        newToDo
      );
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const changeCategory = (selectedCategory: string) => {
    setToDos((oldToDos: any) => {
      const targetIndex = oldToDos.findIndex(
        (oldToDo: any) => oldToDo.id === id
      );
      const newToDo = { text, category: selectedCategory, id };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li style={{ display: "flex", flexDirection: "column" }}>
      <span>{text}</span>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {Object.values(bigCategory).map((activeCategory) => (
          <button
            disabled={activeCategory === category}
            key={activeCategory}
            onClick={() => changeCategory(activeCategory)}
          >
            {activeCategory}
          </button>
        ))}
      </div>
    </li>
  );

  /*   const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: IToDo["category"]) => {
    console.log("I wanna to", newCategory);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>Todo</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
 */
}

export default ToDo;
