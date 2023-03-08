import { Overlay, ModalContainer } from "./ModalInfoTodo.styled";
export const ModalInfoTodo = ({todo,close}) => {
    
  return (
    <>
      <Overlay>
        <ModalContainer>
          <h3>{todo.title}</h3>
          <p>Description: {todo.text}</p>
          <p>
            Status:
            <input
              type="checkbox"
              checked={todo.status?true:false}
              onChange={() => {}}
            />
          </p>
          <button onClick={close}>Close</button>
        </ModalContainer>
      </Overlay>
    </>
  );
};
