

const Card = (  {id,title, priority, description,setShowEditTask,setClickData,status}) => {
 

  return (
    <div key={id} onClick={() =>( setClickData({id,title,priority,description,status}),setShowEditTask(true))} className="p-4">
      <div className="bg-white rounded-2xl shadow-md p-4 space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-800">{title}</p>
          <p className={`text-sm font-medium ${priority === "high" ? "bg-red-700" : priority === "medium" ? "bg-green-600" : "bg-blue-600" } px-2 rounded-lg te `}>{priority}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
