// import { useState, useContext } from "react";
// import { BoardContext } from "../contexts/Board";
// import { TaskContext } from "../contexts/Task";
// import { ListContext } from "../contexts/List";
// import AddItem from "./AddItem";
// import AddItemForm from "./AddItemForm";

// const TaskList = ({ list }) => {
//   const [taskTitle, setTaskTitle] = useState("");
//   const [editMode, setEditMode] = useState(false);

//   const { tasks, dispatchTaskAction } = useContext(TaskContext);
//   const { dispatchBoardAction } = useContext(BoardContext);
//   const { dispatchListAction } = useContext(ListContext);

//   const submitHandler = () => {
//     const taskId = Date.now() + "";
//     dispatchTaskAction({
//       type: "CREATE_TASK",
//       payload: {
//         id: taskId,
//         title: taskTitle,
//         listId: list.id,
//         boardId: list.boardId,
//       },
//     });
//     dispatchListAction({
//       type: "ADD_TASK_ID_TO_A_LIST",
//       payload: {
//         id: list.id,
//         taskId: taskId,
//       },
//     });
//     dispatchBoardAction({
//       type: "ADD_TASK_ID_TO_A_BOARD",
//       payload: {
//         id: list.boardId,
//         taskId: taskId,
//       },
//     });
//     setEditMode(false);
//     setTaskTitle("");
//   };

//   const removeHandler = () => {
//     dispatchListAction({ type: "REMOVE_LIST", payload: list.id });
//     list.tasks.forEach((taskId) => {
//       dispatchTaskAction({ type: "REMOVE_TASK", payload: taskId });
//       dispatchBoardAction({
//         type: "REMOVE_TASK-ID_FROM_A_BOARD",
//         payload: {
//           id: list.id,
//           taskId: taskId,
//         },
//       });
//     });
//     dispatchBoardAction({
//       type: "REMOVE_LIST_ID_OF_A_BOARD", //
//       payload: {
//         id: list.boardId,
//         listId: list.id,
//       },
//     });
//   };

//   return (
//     <div className="bg-gray-300 border rounded p-3">
//       <div className="flex items-center justify-between gap-6 bg-cyan-300 text-lg p-2">
//         <h2>{list.title}</h2>
//         <p onClick={removeHandler} className="text-red-700 text-xl font-bold">
//           X
//         </p>
//       </div>
//       {list.tasks
//         .map((item) => tasks.find((ele) => ele.id === item))
//         .map((task) => (
//           <li key={task.id}>{task.title}</li> //
//         ))}
//       {editMode === false ? (
//         <AddItem listAddItem={false} setEditMode={setEditMode} />
//       ) : (
//         <AddItemForm
//           title={taskTitle} //
//           onChangeHandler={(e) => {
//             setTaskTitle(e.target.value);
//           }}
//           setEditMode={setEditMode}
//           submitHandler={submitHandler}
//         />
//       )}
//     </div>
//   );
// };

// export default TaskList;

import { useState, useContext } from "react";
import { BoardContext } from "../contexts/Board";
import { ListContext } from "../contexts/List";
import { TaskContext } from "./../contexts/Task";

import AddItem from "./AddItem";
import AddItemForm from "./AddItemForm";

const TaskList = ({ list }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { tasks, dispatchTaskAction } = useContext(TaskContext);
  const { dispatchListAction } = useContext(ListContext);
  const { dispatchBoardAction } = useContext(BoardContext);

  const submitHandler = () => {
    const taskId = Date.now() + "";
    dispatchTaskAction({
      type: "CREATE_TASK",
      payload: {
        id: taskId,
        title: taskTitle,
        listId: list.id,
        boardId: list.boardId,
      },
    });
    dispatchListAction({
      type: "ADD_TASK_ID_TO_A_LIST",
      payload: {
        id: list.id,
        taskId: taskId,
      },
    });
    dispatchBoardAction({
      type: "ADD_TASK_ID_TO_A_BOARD",
      payload: {
        id: list.boardId,
        taskId: taskId,
      },
    });
  };

  const removeHandler = () => {
    dispatchListAction({
      type: "REMOVE_LIST",
      payload: list.id,
    });
    list.tasks.forEach((taskId) => {
      dispatchTaskAction({
        type: "REMOVE_TASK",
        payload: taskId,
      });
      dispatchBoardAction({
        type: "REMOVE_TASK-ID_FROM_A_BOARD",
      });
    });

    dispatchBoardAction({
      type: "REMOVE_LIST_ID_FROM_A_BOARD", // OF
      payload: {
        id: list.boardId,
        listId: list.id,
      },
    });
  };

  return (
    <div className="bg-gray-300 border rounded p-3">
      <div className="flex items-center justify-between gap-6 bg-cyan-300 text-lg p-2">
        <h3>{list.title}</h3>
        <p className="text-red-700 text-xl font-bold" onClick={removeHandler}>
          X
        </p>
      </div>
      {list.tasks
        .map((item) => tasks.find((ele) => ele.id === item))
        .map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}

      {editMode === false ? (
        <AddItem listAddItem={false} setEditMode={setEditMode} />
      ) : (
        <AddItemForm
          title={taskTitle}
          onChangeHandler={(e) => {
            setTaskTitle(e.target.value);
          }}
          setEditMode={setEditMode}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
};

export default TaskList;
