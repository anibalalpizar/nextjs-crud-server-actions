import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import prisma from "@/lib/prisma";

export default async function HomePage() {
  const tasks = await prisma.task.findMany();
  console.log({ tasks });
  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <Card key={task.id}>
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
            <Button variant="destructive">Delete</Button>
            <Button>Edit</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
