// import { ProviderId } from "firebase/auth";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import "../../Tasks/scroll.css";
import Task from "../../Tasks/Task/Task";
import PropTypes from "prop-types";

const Container = styled.div`
  background-color: #f4f5f7;
  border-radius: 2.5px;
  width: 300px;
  height: 475px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`;

const Title = styled.h3`
  margin-top: 10px;
  padding: 8px;
  background-color: purple;
  text-align: center;
`;

const TaskList = styled.div`
  padding: 3px;
  transition: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

const Column = ({ title, tasks, id }) => {
  console.log(tasks);
  return (
    <Container className="column">
      <Title
      style={{
          backgroundColor: "lightblue",
          position: "stick",
        }}
      >
        {title}
      </Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {/* provide your tasks */}

            {tasks.map((task, index ) => {
              <Task key={index} index={index} task={task}></Task>
            })}

          {provided.placeholder}
          </TaskList>
        }}
      </Droppable>
      <TaskList></TaskList>
    </Container>
  )

  // return (
  //   <Container className="column">
  //     <Title
  //       style={{
  //         backgroundColor: "lightblue",
  //         position: "stick",
  //       }}
  //     >
  //       {title}
  //     </Title>

  //     <Droppable droppableId={id}>
  //       {(provided, snapshot) => {
  //         <TaskList
  //           ref={provided.innerRef}
  //           {...provided.droppableProps}
  //           isDraggingOver={snapshot.isDraggingOver}
  //         >
  //           {/* Provide your tasks */}
            
  //           {
  //             // eslint-disable-next-line react/prop-types
  //             tasks.slice(0, 5).map((task, index) => {
  //               <Task key={index} index={index} task={task} />
  //             })
  //           }

  //           {provided.placeholder}
  //         </TaskList>;
  //       }}
  //     </Droppable>
  //   </Container>
  // );
};
Column.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.object,
  id: PropTypes.string,
};

export default Column;
