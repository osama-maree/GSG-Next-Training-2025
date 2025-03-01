import TaskItem from "@/component/task-item";
import { ITask } from "@/types";

async function getTasks() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  if (!res.ok) throw new Error("Failed to fetch tasks");
  const tasks: ITask[] = await res.json();
  return tasks.map((task) => ({
    ...task,
    priority: ["High", "Medium", "Low"][Math.floor(Math.random() * 3)],
  }));
}

export default async function Home() {
  const tasks = await getTasks();

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">Task Tracker</h1>
      <ul className="mt-4">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </main>
  );
}
