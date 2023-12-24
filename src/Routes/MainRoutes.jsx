import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import UserActivities from "../Pages/Dashboard/UserProfile/UserActivities"
import EditTask from "../Pages/Dashboard/EditTask/EditTask";
import PrivateRoutes from "../Routes/PrivateRoutes"




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
            {
                path: "createTask",
                element: <CreateTask></CreateTask>
            },
            {
                path: "editTask/:id",
                element: <EditTask></EditTask>,
                loader: ({params}) => fetch(`http://localhost:5000/tasks/${params.id}`)
            }
        ]
    }
])

export default MainRoutes;
