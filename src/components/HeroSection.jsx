import AddTask from "./AddTask";
import Card from "./Card";
import { task } from "../../task";

const HeroSection = ({ showAddTask, setShowAddTask }) => {
  const statuses = ["yet-to-do", "process", "completed"];


  return (
    <div className="relative text-white px-4 pt-20 pb-10 min-h-screen bg-gray-700">
      {/* Blur Overlay */}
      {showAddTask && (
        <>
          <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm z-40"></div>

          <div className="fixed inset-0 flex justify-center items-center z-50 px-4">
            <div className="w-full max-w-md  p-6 rounded-lg shadow-2xl">
              <AddTask setShowAddTask={setShowAddTask} />
            </div>
          </div>
        </>
      )}

      <div className={`${showAddTask ? 'blur-sm' : ''} transition-all duration-300`}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          {statuses.map((status) => (
            <div
              key={status}
              className="w-full md:w-[32%] bg-slate-800 p-4 rounded-xl shadow-lg"
            >
              <p className="text-xl font-bold mb-4 text-center uppercase">{status}</p>
              {task
                .filter((item) => item.status === status)
                .map((data) => (
                  <Card
                    key={data.id }
                    title={data.title}
                    priority={data.priority}
                    description={data.description}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
