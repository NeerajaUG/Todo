import AddTask from "../ui/TaskPage/AddTask";
import { lusitana } from "../ui/TaskPage/fonts";

export default async function page() {
  return (
    <>
      <div className={`${lusitana.className} mb-4 text-xl md:text-2xl text-center pt-8`}>
        Get Started by adding a task
      </div>
      <div className="mt-4 flex justify-center items-center gap-6 md:mt-8">
        <div className="w-full max-w-xs">
          <AddTask placeholder="Add the task to do..." />
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add Task
        </button>
      </div>
    </>
  );
}
