import { IoLogOutOutline } from "react-icons/io5";

function NavBar({ showAddTask, setShowAddTask }) {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-slate-900 text-white flex justify-between items-center px-6 shadow-md z-50">
      {/* Logo / Title */}
      <div>
        <h1 className="text-2xl font-bold tracking-wide">Taskify</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setShowAddTask(!showAddTask)}
          className="px-4 py-1 bg-slate-700 hover:bg-slate-600 rounded-md transition-all duration-200 text-sm md:text-base"
        >
          {showAddTask ? "Close" : "Add Task"}
        </button>

        <IoLogOutOutline
          className="text-2xl hover:text-red-400 cursor-pointer transition duration-200"
          title="Logout"
        />
      </div>
    </nav>
  );
}

export default NavBar;
