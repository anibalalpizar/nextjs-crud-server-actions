import { CardWithForm } from "@/app/new/task-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

async function TaskPageEdit({ params }: { params: { id: string } }) {
  const task = await prisma.task.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!task) redirect("/");

  console.log(task);

  return (
    <div className="flex justify-center items-center h-screen">
      <CardWithForm task={task} />
    </div>
  );
}

export default TaskPageEdit;
