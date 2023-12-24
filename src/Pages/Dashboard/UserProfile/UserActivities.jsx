import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Column from "./Columns/Column";
import { Link } from "react-router-dom";
// import { key } from "localforage";
// import { ProviderId } from "firebase/auth";

const reorderColumnList = (sourceCol, startIndex, endIndex) => {
  const newTasks = Array.from(sourceCol.tasksIds);
  const [removed] = newTasks.splice(startIndex, 1);
  newTasks.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    taskIds: newTasks.id,
  };

  return newColumn;
};

const UserActivities = () => {
  const [tasks, setTasks] = useState([]);
  // const initialData = {
  //   tasks,
  //   columns: {
  //     "column-1": {
  //       id: "column-1",
  //       title: "TO-DO",
  //       taskIds:
  //     }
  //   }
  // }
  const [state, setState] = useState(tasks);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  console.log(tasks);

  useEffect(() => {
    axiosPublic.get(`/tasks?email=${user?.email}`).then((data) => {
      console.log(data);
      setTasks(data.data);
    });
  }, [axiosPublic, user?.email]);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    // If user tries to drop in an unknown  destination
    if (!destination) return;

    // If user drags and drop back in same destination
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // If the user drops within the same column but in a different position
    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];
    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }
    //If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskId);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol]: newEndCol,
      },
    };
    setState(newState);
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-bold">User Activities</h2>
      <div className="mt-8">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <img className="w-full md:w-1/4" src={user?.photoURL} alt="" />
          <div className="w-full md: 2/4">
            <h3 className="text-xl text-green-700 font-bold">
              Name: {user?.displayName}
            </h3>
            <p className="text-xl text-green-700 font-semibold">
              Email: {user?.email}
            </p>
          </div>
        </div>
      </div>

      {/* categorized tasks container */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* all tasks */}
        <div className="border shadow-lg p-5 rounded-lg">
          <h3 className="flex justify-center text-xl font-bold bg-green-800 p-2 text-white">
            All To Do List -{" "}
            <span className="ml-6 text-white">{tasks.length}</span>
          </h3>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="characters">
              {(droppableProvided, droppableSnapShot) => (
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
                      {(droppableProvided, droppableSnapShot) => (
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
          </DragDropContext>
          {/* {
            tasks.map(task => <li key={task.id}>{task.title}</li>)
          } */}
        </div>
        {/* ongoing tasks */}
        <div className="border shadow-lg p-5 rounded-lg">
          <h3 className="text-xl font-bold">All To Do List</h3>
          <DragDropContext>
            <Droppable droppableId="characters">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task._id}
                      draggableId={task._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        ></div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          {/* {
            tasks.map(task => <li key={task.id}>{task.title}</li>)
          } */}
        </div>
        {/* completed tasks */}
        <Column />
      </div>
    </div>
  );
};

export default UserActivities;
