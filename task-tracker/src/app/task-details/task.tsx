"use client"
import { ITask } from "@/types";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

const Task: FC<{ id: number }> = ({ id }) => {
  const router = useRouter();
  const [task, setTask] = useState<ITask | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTask() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        if (!res.ok) throw new Error("Task not found");
        const data: ITask = await res.json();
        setTask({
          ...data,
          priority: ["High", "Medium", "Low"][Math.floor(Math.random() * 3)],
        });
      } catch (error) {
        console.log(error);
        router.push("/not-found");
      } finally {
        setLoading(false);
      }
    }
    fetchTask();
  }, [id, router]);

  if (loading) return <p>Loading...</p>;
  if (!task) return null;

  return (
    <>
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p className="mt-2">Status: {task.completed ? "Completed" : "Pending"}</p>
      <p className={`ml-auto font-semibold ${
          task.priority === "High"
            ? "text-red-500"
            : task.priority === "Medium"
            ? "text-yellow-500"
            : "text-green-500"
        }`}>Priority: {task.priority}</p>
      <br />
      <br />
      <button
        onClick={() => router.push("/")}
        className="text-blue-500 hover:underline cursor-pointer"
      >
        Back to Tasks
      </button>
    </>
  );
};

export default Task;
