import { Row } from "../Row/Row";
import { Table } from "./TodoList.styled";
import { memo } from "react";

export const TodoList = memo(({ todos, show, setTodos }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(todos).map((todo) => (
          <Row key={todo.id} todo={todo} show={show} setTodos={setTodos} />
        ))}
      </tbody>
    </Table>
  );
});
