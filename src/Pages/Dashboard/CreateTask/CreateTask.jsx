import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [ priority, setPriority ] = useState("")
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const tasks = {
      title: data.title,
      email: user?.email,
      description: data.description,
      dueDate: data.dueDate,
      priority: priority
    };
    axiosPublic.post("/tasks", tasks).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Tasks has been created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard")
      }
    });
  };

  const handlePriorityChange  = (e) => {
    setPriority(e.target.value);
  }

  return (
    <div>
      <div className="w-full md:w-2/3 border p-8 shadow-lg rounded-lg mx-auto">
        <h2 className="text-2xl text-center font-bold text-green-600">
          Create Task
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="title">Task Title:</label>
            <input
              className="input input-bordered w-full"
              type="text"
              {...register("title", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="title">Description:</label>
            <input
              className="input input-bordered w-full"
              type="text"
              {...register("description", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="title">Due Date:</label>
            <input
              className="input input-bordered w-full"
              type="date"
              {...register("dueDate", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="title">Priority:</label>
            <select className="input input-bordered w-full" value={priority} onChange={handlePriorityChange}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <input
              className="mt-5 btn btn-info btn-block"
              type="submit"
              value="Add New Task"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
