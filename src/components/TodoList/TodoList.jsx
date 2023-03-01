import { Row } from "../Row/Row";
import { Table } from "./TodoList.styled";

export const TodoList = ({ todos, show, setStatus, change }) => {
  
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
        {todos.map(({ title, text, id, status }) => (
          <Row
            key={id}
            id={id}
            title={title}
            text={text}
            show={show}
            status={status}
            setStatus={setStatus}
            change={change}
          />
        ))}
      </tbody>
    </Table>
  );
};
