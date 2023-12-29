import { useEffect, useState } from "react";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../UserProfile/Columns/Column";
// import { getItem } from "localforage";
// import { set } from "react-hook-form";

const UserTasks = () => {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  // const [tasks, setTasks] = useState([]);
//   const { user, loading } = useAuth();
  //   const axiosPublic = useAxiosPublic();
  useEffect(() => {
    // axiosPublic.get(`/tasks?email=${user?.email}`).then((data) => {
    //   console.log(data);
    //   setTasks(data.data);
    //   setCompleted(data.data);
    //   setIncomplete(data)
    // });
    // fetch('https://task-management-server-amber-nu.vercel.app/tasks')
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setCompleted(json.filter((task) => task.completed));
        setIncomplete(json.filter((task) => !task.completed));
        // loading(false);
      });
  },[]);
  //   console.log(tasks);
  console.log(completed);
  console.log(incomplete);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId === destination.droppableId) return;

    // remove from source array
    if(source.droppableId == 2) {
        setCompleted(removeItemById(draggableId, completed));
    } else {
        setIncomplete(removeItemById(draggableId, incomplete));
    }

    // get Item
    const task = findItemById(draggableId, [...incomplete, ...completed])

    // Add Item
    if(destination.droppableId == 2) {
        setCompleted([{...task, completed: !task.completed }, ...completed]);
    } else {
        setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
    }
  };

  function findItemById(id, array) {
    return array.find((item) => item.id == id)
  }
  function removeItemById(id, array) {
    return array.filter((item) => item.id != id)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 className="text-3xl text-center font-bold">TASKS PROGRESS</h2>
      <div
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Column title={"TO DO"} tasks={incomplete} id={"1"} />
        <Column title={"ON GOING"} tasks={[]} id={"2"} />
        <Column title={"COMPLETED"} tasks={completed} id={"3"} />
      </div>
    </DragDropContext>
  );
};

export default UserTasks;
