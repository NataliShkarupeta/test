import { useState} from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { FormAddTodo } from "./components/FormAddTodo/FormAddTodo";
import { ModalInfoTodo } from "./components/ModalInfoTodo/ModalInfoTodo";
import { Test } from "./tests/test";

export const App = () => {
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
      <Test />
      {isOpen && todoId && <ModalInfoTodo todo={todoId} close={closeModal} />}
      <FormAddTodo createTodo={setTodos} />
      <TodoList
        todos={todos}
        show={showModal}
        setTodos={setTodos}
      />
    </>
  );
};
