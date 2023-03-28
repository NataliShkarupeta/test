import { useState, memo } from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { FormAddTodo } from "./components/FormAddTodo/FormAddTodo";
import { ModalInfoTodo } from "./components/ModalInfoTodo/ModalInfoTodo";
import { Test } from "./tests/test";

export const App = memo(() => {
  const [todos, setTodos] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [todoId, setTodoId] = useState("");
  // const [status, setStatus] = useState();

  // const changeStatus=(id)=>{
  //   const newTodo = todos.map(todo=>todo.id === id ?{...todo,status:status}: todo)
  //   setTodos(newTodo);
  // }

  // console.log('todo=>',todoId);
  console.log("todos", todos);
  // const takeTodo = (data) => {
  //    console.log(data);
  //   setTodos((prev) => [...prev, data]);
  // };

  const showModal = (id) => {
    setIsOpen(true);
    const todo = todos.find((todo) => todo.id === id);
    setTodoId(todo);

  };

  const closeModal = () => {
    setIsOpen(false);
    // setTodoId('')
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
        // change={changeStatus}
      />
    </>
  );
});
