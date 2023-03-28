import {  memo } from "react";
import { Td, Check } from "../TodoList/TodoList.styled";

export const Row = memo(({ todo, show, setTodos }) => {
  console.log("render todo");
  const { id, title, text, status } = todo;

  return (
    <tr>
      <Td>{id}</Td>
      <Td onClick={() => show(id)}>{title}</Td>
      <Td onClick={() => show(id)}>{text}</Td>
      <Td>
        <Check
          type="checkbox"
          value={status}
          onClick={(e) => {
            e.stopPropagation();
            const { target } = e;
            setTodos((todos) => {
              todos[id] = { ...todos[id], status: target.checked };
              return { ...todos };
            });
          }}
        ></Check>
      </Td>
    </tr>
  );
});
