import { Link, Outlet } from "react-router-dom";
import UserProfile from "../components/UserProfile";
// import useAuth from "../hooks/useAuth";


const Dashboard = () => {
    // const { user } = useAuth();
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-2/12 bg-[#158d9c] p-5">
        <UserProfile></UserProfile>
        <div className="divider"></div>
        <ul>
            <li>
                <Link to="createTask">Create Task</Link>
            </li>
        </ul>
      </div>
      <div className="w-full md:w-10/12 p-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Dashboard;
