import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import storyImg from "/images/task.png";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const style = {
    backgroundImage:
      "url(https://i.ibb.co/DzzLsFp/pexels-filippo-bergamaschi-986774-1.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(() => {
        // console.log(res.user);
        updateUserProfile(data.name, data.photo).then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            photo: data.photo,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            // console.log(res);
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User has been added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/login");
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={style}
      className="h-screen flex md:flex-row justify-center items-center"
    >
      <Helmet>
        <title>register</title>
      </Helmet>
      <div className="w-full hidden md:block md:w-2/5">
        <img className="p-5 storyImage" src={storyImg} alt="" />
      </div>
      <div className="flex flex-col w-full md:w-2/5 border p-5 rounded-lg mx-3">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-4">
          Register Here
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-white" htmlFor="name">Name: </label>
            <input
              className="input input-bordered border-white bg-transparent w-full mb-3"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <label className="text-white mr-3" htmlFor="email">Email:</label>
          <input
            className="input input-bordered border-white bg-transparent w-full mb-3"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          </div>
          <div>
            <label className="text-white mr-3" htmlFor="password">Password:</label>
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
          </div>
          <input
            type="text"
            className="input input-bordered border-white bg-transparent w-full mb-3"
            placeholder="Enter your photo url"
            {...register("photo", { required: true })}
          />
          <input
            type="submit"
            value="Register"
            className="btn btn-info btn-block"
          />
        </form>
        <div className=" mt-1 bg-info p-3 rounded-lg">
          <SocialLogin></SocialLogin>
        </div>
        <p className="text-center text-white">
          Already have an account? Please{" "}
          <Link to="/login" className="text-purple-600 font-bold">
            Login
          </Link>{" "}
          here.
        </p>
      </div>
    </div>
  );
};

export default Register;
