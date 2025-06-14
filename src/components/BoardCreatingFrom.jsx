import { useState, useContext } from "react";

import { BoardContext } from "./../contexts/Board";

const BoardCreatingFrom = () => {
  const [boardTitle, setBoardTitle] = useState("");

  const { dispatchBoardAction } = useContext(BoardContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (boardTitle.trim() === "") {
      return alert(`Please provide a valid title`);
    }
    dispatchBoardAction({ type: "CREATE_BOARD", payload: boardTitle });
    setBoardTitle("");
  };

  return (
    <div className="">
      <form
        className="flex items-center justify-center gap-4 p-6"
        onSubmit={submitHandler}
      >
        <input
          className="border rounded-md p-2 border-gray-900 "
          type="text"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-900 text-lg p-2 text-white rounded cursor-pointer "
        >
          Create Board
        </button>
      </form>
    </div>
  );
};

export default BoardCreatingFrom;
