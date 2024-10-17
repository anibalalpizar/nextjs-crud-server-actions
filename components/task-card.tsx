import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Task } from "@prisma/client";
import clsx from "clsx";
import { Button } from "./ui/button";
import { TaskButtonDelete } from "./task-button-delete";

function TaskCard({ task }: { task: Task }) {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>{task.name}</CardTitle>
        <Badge
          className={clsx({
            "bg-red-500": task.priority === "urgent",
            "bg-yellow-500": task.priority === "high",
            "bg-green-500": task.priority === "medium",
            "bg-blue-500": task.priority === "low",
          })}
        >
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
        <span className="text-sm text-gray-500">
          {new Date(task.createdAt).toLocaleDateString()}{" "}
        </span>
      </CardContent>
      <CardFooter className="flex gap-x-2">
        <TaskButtonDelete taskId={task.id} />
        <Button>Edit</Button>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
