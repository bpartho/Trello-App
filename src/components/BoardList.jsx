import React from "react";
import { useContext } from "react";
import { BoardContext } from "../contexts/Board";
import { Link } from "react-router-dom";
import BoardItem from "./BoardItem";

const BoardList = () => {
  const { boards } = useContext(BoardContext);
  return (
    <div className="flex items-center justify-center gap-12 mt-6">
      {boards.map((board) => (
        <Link key={board.id} to={`/boards/${board.id}`}>
          <BoardItem board={board} />
        </Link>
      ))}
    </div>
  );
};

export default BoardList;
