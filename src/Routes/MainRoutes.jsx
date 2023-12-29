import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
// import UserActivities from "../Pages/Dashboard/UserProfile/UserActivities"
import EditTask from "../Pages/Dashboard/EditTask/EditTask";
import PrivateRoutes from "../Routes/PrivateRoutes"
import UserTasks from "../Pages/Dashboard/Tasks/UserTasks";
import UserActivities from "../Pages/Dashboard/UserProfile/UserActivities";




const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
        ]
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "register",
        element: <Register></Register>
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: "userActivities",
                element: <UserActivities></UserActivities>
            },
            // {
            //     path: "userActivities",
            //     element: <UserTasks></UserTasks>
            // },
            {
                path: "createTask",
                element: <CreateTask></CreateTask>
            },
            {
                path: "editTask/:id",
                element: <EditTask></EditTask>,
                loader: ({params}) => fetch(`https://task-management-server-amber-nu.vercel.app/tasks/${params.id}`)
            }
        ]
    }
])

export default MainRoutes;
