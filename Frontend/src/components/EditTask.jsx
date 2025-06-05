import React, { useState, useEffect } from 'react';


const EditTask = ({ setShowEditTask, taskToEdit }) => {
  const [formField, setFormField] = useState({
    title: '',
    description: '',
    status: '',
    priority: '',
    id: null,
  });

  useEffect(() => {
    if (taskToEdit) {
      setFormField(taskToEdit);
    }
  }, [taskToEdit]);

  const onChangeHandler = (e) => {
    setFormField((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };



  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-slate-700 rounded-2xl shadow-2xl w-[90%] max-w-md p-6">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Edit Task</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-white mb-1">Task Title</label>
            <input
              value={formField.title}
              onChange={onChangeHandler}
              name="title"
              type="text"
              placeholder="Enter the task title"
              className="p-2 rounded-md bg-slate-600 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <label className="text-sm text-white mb-1">Priority</label>
              <select
                value={formField.priority}
                onChange={onChangeHandler}
                name="priority"
                className="p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-sm text-white mb-1">Status</label>
              <select
                value={formField.status}
                onChange={onChangeHandler}
                name="status"
                className="p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>Select Status</option>
                <option value="Yet-to-do">Yet To Start</option>
                <option value="process">In Process</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-white mb-1">Description</label>
            <input
              value={formField.description}
              onChange={onChangeHandler}
              name="description"
              type="text"
              placeholder="Enter the task description"
              className="p-2 rounded-md bg-slate-600 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-3 pt-4">
            <button
              type="button"
              className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 text-sm"
              onClick={() => setShowEditTask(false)}
            >
              Cancel
            </button>

            <button
              type="button"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
                onClick={() => setShowEditTask(false)}
            >
              Delete
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
         
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
