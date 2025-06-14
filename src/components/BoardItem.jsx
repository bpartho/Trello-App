import React from "react";
import { useContext } from "react";
import { BoardContext } from "../contexts/Board";
import { ListContext } from "./../contexts/List";
import { TaskContext } from "./../contexts/Task";

const BoardItem = ({ board }) => {
  const { dispatchBoardAction } = useContext(BoardContext);
  const { dispatchListAction } = useContext(ListContext);
  const { dispatchTaskAction } = useContext(TaskContext);

  const removeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatchBoardAction({ type: "REMOVE_BOARD", payload: board.id });
    board.lists.forEach((listId) => {
      dispatchListAction({ type: "REMOVE_LIST", payload: listId });
    });
    board.tasks.forEach((taskId) => {
      dispatchTaskAction({ type: "REMOVE_TASK", payload: taskId });
    });
  };

  return (
    <div className="bg-slate-700 text-white rounded-lg p-3 shadow-lg text-lg  flex flex-col items-center justify-between ">
      <div className="flex items-center justify-between gap-8">
        <h2>{board.title}</h2>
        <p className="text-red-700 text-xl font-bold" onClick={removeHandler}>
          X
        </p>
      </div>
    </div>
  );
};

export default BoardItem;
