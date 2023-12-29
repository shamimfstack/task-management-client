// import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";

const EditTask = () => {
  const [ priority, setPriority ] = useState("")
  const {_id, title, description, dueDate } = useLoaderData();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // const res = data;
    // console.log(res);
    const updatedTask = {

        title: data.title,
        email: user?.email,
        description: data.description,
        dueDate: data.dueDate,

    }
    console.log(updatedTask);

    axiosPublic.put(`/tasks/${_id}`, updatedTask)
    .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0) {
          reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Tasks updated successfully",
                showConfirmButton: false,
                timer: 1500,
              });
        }
    })
    .then(err => {
        console.log(err);
    })
  };

  const handlePriorityChange  = (e) => {
    setPriority(e.target.value);
  }

 
  return (
    <div>
      <div className="w-full md:w-2/3 border p-8 shadow-lg rounded-lg mx-auto">
        <h2 className="text-2xl text-center font-bold text-green-600">
          Edit Task
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Task Title:</label>
                <input className="input input-bordered w-full" defaultValue={title} type="text"  {...register("title", {required: true})}/>
            </div>
            <div>
                <label htmlFor="title">Description:</label>
                <input className="input input-bordered w-full" defaultValue={description} type="text"  {...register("description", {required: true})}  />
            </div>
            <div>
                <label htmlFor="title">Due Date:</label>
                <input className="input input-bordered w-full" defaultValue={dueDate} type="date"  {...register("dueDate", {required: true})}  />
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
                <input className="mt-5 btn btn-info btn-block" type="submit" value="Save"  />
            </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
