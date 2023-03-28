import { memo } from "react";
import { Form, Label, Button } from "./FormAddTodo.styled";

export const FormAddTodo = memo(({ createTodo }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const formDAta = new FormData(e.target);
    const title = formDAta.get("title");
    const text = formDAta.get("text");

    createTodo((todos) => {
      const newTodo = {
        title,
        text,
        status: false,
        id: new Date().getTime(),
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
