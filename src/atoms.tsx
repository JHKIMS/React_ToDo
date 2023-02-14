import { atom, selector } from "recoil";

export enum Categories{
    "TO_DO" ="TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export let existCategory: string[] = ["TO_DO", "DOING", "DONE"];

export const toDoState = atom<IToDo[]>({
  key: "todo",
  default: [],
});

export const categoryState = atom<string>({
    key: "category",
    default: existCategory[0],
})

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);
  },
});

export const bigCategoryState = atom<string[]>({
  key: "bigCategoryState",
  default: JSON.parse(localStorage.getItem("bigCategory") ?? JSON.stringify(existCategory)),
})