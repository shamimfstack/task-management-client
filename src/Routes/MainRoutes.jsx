import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";




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
            {
                path: "login",
                element: <Login></Login>
            },
        ]
    }
])

export default MainRoutes;
