import { useState } from "react";
// import {TodoList} from "./TodoList/TodoList"
import { FormAddTodo } from "./FormAddTodo/FormAddTodo";
import { ModalInfoTodo } from "./ModalInfoTodo/ModalInfoTodo";
// import {Test} from "../tests/test"
import {Table} from './TodoList/TodoList.styled'
import {Row } from './Row/Row'

export const Todos = () => {
  const [todos, setTodos] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [todoId, setTodoId] = useState("");

  const showModal = (id) => {
    setIsOpen(true);
    const todo = Object.values(todos).find((todo) => todo.id === id);
    setTodoId(todo);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* <Test /> */}
      {isOpen && todoId && <ModalInfoTodo todo={todoId} close={closeModal} />}
      <FormAddTodo createTodo={setTodos} />
      {
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
              <Row
                key={todo.id}
                todo={todo}
                show={showModal}
                setTodos={setTodos}
              />
            ))}
          </tbody>
        </Table>
      }
      {/* <TodoList todos={todos} show={showModal} setTodos={setTodos} /> */}
    </>
  );
};
