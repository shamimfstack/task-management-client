import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import storyImg from "/images/task.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = useAuth();
  const location = useLocation();
    const navigate = useNavigate();

    let from = location?.state?.from?.pathname || "/";

  const style = {
    backgroundImage:
      "url(https://i.ibb.co/DzzLsFp/pexels-filippo-bergamaschi-986774-1.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res);
        // navigate(from, { replace: true });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={style}
      className="h-screen flex md:flex-row justify-center items-center"
    >
      <Helmet>
        <title>login</title>
      </Helmet>
      <div className="w-full hidden md:block md:w-2/5">
        <img className="p-5 storyImage" src={storyImg} alt="" />
      </div>
      <div className="flex flex-col w-full md:w-2/5 border p-5 rounded-lg mx-3">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-4">
          Login Here
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            className="input input-bordered border-white bg-transparent w-full mb-3 text-white"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input input-bordered border-white bg-transparent w-full mb-3 text-white"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="text-white absolute top-4 right-4"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-info btn-block"
          />
        </form>
        <div className=" mt-1 bg-info p-3 rounded-lg">
          <SocialLogin></SocialLogin>
        </div>

        <p className="text-center text-white">
          New here? Please{" "}
          <Link to="/register" className="text-purple-600 font-bold">
            Register
          </Link>{" "}
          here.
        </p>
      </div>
    </div>
  );
};

export default Login;
