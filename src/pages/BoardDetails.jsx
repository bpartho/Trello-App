import { Link, useParams } from "react-router-dom";
import AddItem from "../components/AddItem";
import AddItemForm from "../components/AddItemForm";
import { useState, useContext } from "react";
import { BoardContext } from "../contexts/Board";
import { ListContext } from "../contexts/List";
import TaskList from "../components/TaskList";

function BoardDetails() {
  const [editMode, setEditMode] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const { boardId } = useParams();
  const { dispatchBoardAction } = useContext(BoardContext);
  const { lists, dispatchListAction } = useContext(ListContext);

  const renderedList = lists.filter((item) => item.boardId === boardId);

  const submitHandler = (e) => {
    e.preventDefault();
    const id = Date.now() + "";
    dispatchListAction({
      type: "CREATE_LIST",
      payload: {
        id: id,
        title: listTitle,
        boardId: boardId,
      },
    });
    dispatchBoardAction({
      type: "ADD_LIST_ID_TO_A_BOARD",
      payload: {
        id: boardId,
        listId: id,
      },
    });
    setEditMode(false);
    setListTitle("");
  };

  return (
    <div className="flex mt-4 items-center justify-center gap-6">
      <Link to="/">Back To Boards</Link>
      {renderedList.map((list) => (
        <TaskList key={list.id} list={list} />
      ))}
      {editMode === false ? (
        <AddItem listAddItem={true} setEditMode={setEditMode} />
      ) : (
        <AddItemForm
          listForm={true}
          title={listTitle}
          onChangeHandler={(e) => setListTitle(e.target.value)}
          setEditMode={setEditMode}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
}

export default BoardDetails;
