import { Link, Outlet } from "react-router-dom";
import UserProfile from "../components/UserProfile";
// import useAuth from "../hooks/useAuth";


const Dashboard = () => {
    // const { user } = useAuth();
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-2/12 bg-[#158d9c] p-5">
        <UserProfile></UserProfile>
        <div className="divider"></div>
        <ul>
            <li>
                <Link to="/dashboard/userProfile">User Profile</Link>
            </li>
            <li>
                <Link to="/dashboard/createTask">Create Task</Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to="/">Home</Link>
            </li>
        </ul>
      </div>
      <div className="w-full md:w-10/12 p-5">
        <Outlet>
          {/* <div>
            <h2>TO-DO List</h2>
            <table className="border">
              <tr>
                <th></th>
                <th>Tasks Title</th>
                <th>DueDate</th>
                <th>Action</th>
              </tr>
            </table>
          </div> */}
        </Outlet>
      </div>
    </div>
  );
}

export default Dashboard;
