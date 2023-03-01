import { useState } from "react";
import { Td, Check } from "../TodoList/TodoList.styled";

export function Row({ id, title, text,  show, setStatus, change }) {
  const [checked, setChecked] = useState(false);

  const handelChangeCheck = ({ target }) => {
    setChecked(target.checked);
    if (!checked) {
      setStatus(true);
    } else {
      setStatus(false);
    }
    change(id);
  };

  return (
    <tr>
      <Td>{id}</Td>
      <Td onClick={() => show(id)}>{title}</Td>
      <Td onClick={() => show(id)}>{text}</Td>
      <Td>
        <Check
          onChange={handelChangeCheck}
          type="checkbox"
          checked={checked}
        ></Check>
      </Td>
    </tr>
  );
}
