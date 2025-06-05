import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";


const Home = ({showAddTask,setShowAddTask}) => {

  return (
    <div className="w-full min-h-screen bg-gray-700 ">
      <NavBar showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
      <HeroSection showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
    </div>
  );
};

export default Home;
