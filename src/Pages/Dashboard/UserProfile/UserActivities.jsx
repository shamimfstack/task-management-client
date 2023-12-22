import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const UserProfile = () => {
  const [tasks, setTasks] = useState([]);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  console.log(tasks);
  

  useEffect(() => {
    axiosPublic.get(`/tasks?email=${user.email}`).then((data) => {
      console.log(data);
      setTasks(data.data);
    });
  }, [axiosPublic, user.email]);

  return (
    <div>
      <h2 className="text-3xl text-center font-bold">User Activities</h2>
      <div className="mt-8">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <img className="w-full md:w-1/4" src={user?.photoURL} alt="" />
          <div className="w-full md: 2/4">
            <h3 className="text-xl text-green-700 font-bold">
              Name: {user?.displayName}
            </h3>
            <p className="text-xl text-green-700 font-semibold">
              Email: {user?.email}
            </p>
          </div>
        </div>
      </div>
      {/* categorized tasks container */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* all tasks */}
        <div className="border shadow-lg p-5 rounded-lg">
          <h3 className="text-xl font-bold">All To Do List</h3>
          {tasks.map((task) => (
            <li className="list-decimal" key={task.id}>{task.title}</li>
          ))}
        </div>

        {/* ongoing tasks */}
        <div className="border shadow-lg p-5 rounded-lg">
          <h3 className="text-xl font-bold">Ongoing To Do List</h3>
          {tasks.map((task) => (
            <li className="list-decimal" key={task.id}>{task.title}</li>
          ))}
        </div>

        {/* completed tasks */}
        <div className="border shadow-lg p-5 rounded-lg">
          <h3 className="text-xl font-bold">Completed To Do List</h3>
          {tasks.map((task) => (
            <li className="list-decimal" key={task.id}>{task.title}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
