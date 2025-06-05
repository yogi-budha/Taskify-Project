import React, { useState } from 'react';
import {task} from '../../task'

const AddTask = ({setShowAddTask}) => {

  const [taskval,setTaskval] = useState(task)
  const [formField,setFormField] = useState({
    title:"",description:"",status:"",priority:""
  })


  const handleAddToTask = (e)=>{
    e.preventDefault()
    console.log(formField)
    setTaskval((prev)=>({...prev,prev}))
    console.log(taskval)

  }

  const onChangeHandler = (e)=>{
    setFormField((prev)=>({ ...prev, [e.target.name]: e.target.value ,id:task.length}))


  }
  return (
    <div className="fixed inset-0  flex justify-center items-center z-50">
      <div className="bg-slate-700 rounded-2xl shadow-2xl w-[90%] max-w-md p-6">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Add Task</h1>
        <form className="flex flex-col gap-4">

  
          <div className="flex flex-col">
            <label className="text-sm text-white mb-1">Task Title</label>
            <input
            value={formField.title}
            onChange={onChangeHandler}
            name='title'
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
              name='priority'

                defaultValue=""
                className="p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>
                  Select Priority
                </option>
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
              name='status'
                defaultValue=""
                className="p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>
                  Select Status
                </option>
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
            name='description'
              type="text"
              placeholder="Enter the task description"
              className="p-2 rounded-md bg-slate-600 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 text-sm"

              onClick={() => setShowAddTask(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
              onClick={handleAddToTask}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
