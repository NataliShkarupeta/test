import { useState, memo } from "react";
import { Form, Label, Button } from "./FormAddTodo.styled";

export const FormAddTodo = memo(({ createTodo }) => {
  console.log("render form");
  const [id, setId] = useState(0);

  const createId = () => {
    setId((prev) => prev + 1);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const formDAta = new FormData(e.target);
    const title = formDAta.get("title");
    const text = formDAta.get("text");

    createId();

    createTodo((todos) => {
      const newTodo = {
        title,
        text,
        status: false,
        id,
      };
      return { ...todos, [newTodo.id]: { ...newTodo } };
    });

   
    e.target.reset();
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Label>
        Title:
        <input type="text" title="This field is empty" name="title" required />
      </Label>
      <Label>
        Description:
        <input type="text" name="text" />
      </Label>
      <Button>Create</Button>
    </Form>
  );
});
