import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import storyImg from "../../../public/images/task.png";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

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
    
      const onSubmit = (data) => console.log(data);

  return (
    <div
      style={style}
      className="h-screen flex md:flex-row justify-center items-center"
    >
      <div className="w-full hidden md:block md:w-2/5">
        <img className="p-5 storyImage" src={storyImg} alt="" />
      </div>
      <div className="flex flex-col w-full md:w-2/5 border p-5 rounded-lg mx-3">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-4">
          Register Here
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered border-white bg-transparent w-full mb-3"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
          <input
            className="input input-bordered border-white bg-transparent w-full mb-3"
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
            <span onClick={() => setShowPassword(!showPassword)} className="text-white absolute top-4 right-4">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
          </div>
          <input
            className="input input-bordered border-white bg-transparent w-full mb-3"
            placeholder="Enter your photo"
            {...register("photo", { required: true })}
          />
          <input
            type="submit"
            value="Register"
            className="btn btn-info btn-block"
          />
        </form>
        <p className="text-center text-white">
          Already have an account? Please{" "}
          <Link to="/login" className="text-purple-600 font-bold">Login</Link> here.
        </p>
      </div>
    </div>
  );
};

export default Register;
