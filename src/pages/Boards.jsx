import React from "react";
import BoardCreatingFrom from "./../components/BoardCreatingFrom";
import BoardList from "./../components/BoardList";

function Boards() {
  return (
    <div>
      <BoardCreatingFrom />
      <BoardList />
    </div>
  );
}

export default Boards;
