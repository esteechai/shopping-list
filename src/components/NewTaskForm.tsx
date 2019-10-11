import React, { FunctionComponent } from "react";

import { Task } from "../../models/task";
import { Button, Form } from "semantic-ui-react";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
}


export const NewTaskForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  task
}) => (
  <form onSubmit={onAdd}>
    <input type="text" onChange={onChange} value={task.name} />
    <button type="submit">Add</button>
  </form>
);

 

