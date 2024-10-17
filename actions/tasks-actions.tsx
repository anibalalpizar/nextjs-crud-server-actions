"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createTask = async (formData: FormData) => {
  const name = formData.get("name");
  const description = formData.get("description");
  const priority = formData.get("priority");

  if (!name || !description || !priority) return;

  await prisma.task.create({
    data: {
      name: name as string,
      description: description as string,
      priority: priority as string,
    },
  });

  redirect("/");
};

export const deleteTask = async (formData: FormData) => {
  const taskId = formData.get("id");

  if (!taskId) return;

  await prisma.task.delete({
    where: {
      id: parseInt(taskId as string),
    },
  });

  revalidatePath("/");
};

export const updateTask = async (formData: FormData) => {
  const id = formData.get("id");
  const name = formData.get("name");
  const description = formData.get("description");
  const priority = formData.get("priority");

  if (!id || !name || !description || !priority) return;

  await prisma.task.update({
    where: {
      id: parseInt(id as string),
    },
    data: {
      name: name as string,
      description: description as string,
      priority: priority as string,
    },
  });

  redirect("/");
};
