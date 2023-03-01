import { useState } from "react";
import { Form, Label, Button } from "./FormAddTodo.styled";

export const FormAddTodo = ({ takeTodo, status }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState(0);

  const createId = () => {
    setId((prev) => prev + 1);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    createId();
    const newTodo = {
      title,
      text,
      status,
      id,
    };
    takeTodo(newTodo);
    setTitle("");
    setText("");
  };

  const takeInputValue = (evt) => {
    const { name, value } = evt.target;
    if (name === "title") setTitle(value);
    if (name === "text") setText(value);
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Label>
        {" "}
        Title:
        <input
          type="text"
          title="This field is empty"
          onChange={takeInputValue}
          name="title"
          value={title}
          required
        />
      </Label>
      <Label>
        Description:
        <input type="text" onChange={takeInputValue} name="text" value={text} />
      </Label>
      <Button>Create</Button>
    </Form>
  );
};
