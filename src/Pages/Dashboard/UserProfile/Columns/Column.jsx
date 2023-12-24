import { Link } from "react-router-dom";
import Header from "../Header/Header";
import PropTypes from "prop-types"
import { Draggable, Droppable } from "react-beautiful-dnd";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";

const Column = ({column, }) => {
  const [tasks, setTasks] = useState([]);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get(`/tasks?email=${user?.email}`).then((data) => {
      console.log(data);
      setTasks(data.data);
    });
  }, [axiosPublic, user?.email]);

  const handleDelete = (id) => {
    console.log(id);
    axiosPublic.delete(`/tasks/${id}`)
    .then(res => {
      if(res.data.deletedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Tasks has been created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        axiosPublic.get(`/tasks?email=${user?.email}`)
        .then(res => {
          setTasks(res.data)
        })
        
      }
    })
    
  }
  console.log(tasks);
  return (
    <div className="border shadow-lg p-3 h-96 rounded-lg bg-gray-100">
      <Header title={column.title}></Header>
      <div className="p-2">
      <Droppable droppableId="characters">
              {(droppableProvided) => (
                <div
                  {...droppableProvided.droppableProps}
                  {...droppableProvided.dragHandleProps}
                  ref={droppableProvided.innerRef}
                >
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task._id}
                      draggableId={`${task._id}`}
                      index={index}
                    >
                      {(droppableProvided) => (
                        <div
                          ref={droppableProvided.innerRef}
                          {...droppableProvided.draggableProps}
                          {...droppableProvided.dragHandleProps}
                        >
                          <div className="flex justify-between bg-gray-100 my-2 p-2">
                            <p>{task.title}</p>
                            <span className="right-0">
                              <Link to={`/dashboard/editTask/${task._id}`}>
                                <button className="btn btn-info btn-sm">
                                  Edit
                                </button>
                              </Link>
                              <button onClick={() => handleDelete(task._id)} className="btn btn-error btn-sm ml-2">Delete</button>
                            </span>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {droppableProvided.placeholder}
                </div>
              )}
            </Droppable>
      </div>
    </div>
  );
};

Column.propTypes = {
  column: PropTypes.object,
  tasks: PropTypes.array
}

export default Column;
