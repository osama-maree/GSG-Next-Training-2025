import Image from "next/image";
import Link from "next/link";
import Pending from "../../../public/pending.jpg";
import Completed from "../../../public/completed.jpg";
import { ITask } from "@/types";

export default function TaskItem({ task }: { task: ITask }) {
  return (
    <li className="flex items-center space-x-4 p-3 border-b">
      <Image
        src={task.completed ? Completed : Pending}
        alt={task.completed ? "Completed" : "Pending"}
        width={60}
        height={60}
      />
      <Link href={`/task-details/${task.id}`} className="text-blue-500 hover:underline">
        {task.title}
      </Link>
      <span
        className={`ml-auto font-semibold ${
          task.priority === "High"
            ? "text-red-500"
            : task.priority === "Medium"
            ? "text-yellow-500"
            : "text-green-500"
        }`}
      >
        {task.priority}
      </span>
    </li>
  );
}
