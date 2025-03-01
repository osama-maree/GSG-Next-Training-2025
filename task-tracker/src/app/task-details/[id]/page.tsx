import Task from "../task";

interface IProps {
  params: Promise<{ id: number }>;
}

const TaskDetail = async ({ params }: IProps) => {
  const { id } = await params;

  return (
    <main className="p-6 max-w-xl mx-auto">
      <Task id={id} />
    </main>
  );
};

export default TaskDetail;
