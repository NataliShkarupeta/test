import { Overlay, ModalContainer, Button } from "./ModalInfoTodo.styled";
// import { Check } from "../TodoList/TodoList.styled";
export const ModalInfoTodo = ({todo,close}) => {
    console.log(todo.status);
  return (
    <>
      <Overlay>
        <ModalContainer>
          <h3>{todo.title}</h3>
          <p>Description: {todo.text}</p>
          <p>
            Status: 
            <Button
              disable="disable"
              type="checkbox"
              checked={todo.status}
            ></Button>
          </p>
          <button onClick={close}>Close</button>
        </ModalContainer>
      </Overlay>
    </>
  );
};
