import prisma from "@/lib/prisma";
import TaskCard from "@/components/task-card";

export default async function HomePage() {
  const tasks = await prisma.task.findMany();
  console.log({ tasks });
  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
