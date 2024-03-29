import React, { FunctionComponent } from "react";

import { Task } from "../../models/task";

interface Props {
  task: Task;
  onDelete: (task: Task) => void;
}

export const TaskListItem: FunctionComponent<Props> = ({ task, onDelete }) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <p>
      {task.name} <button onClick={onClick}>X</button>
    </p>
  );
};
