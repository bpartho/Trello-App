import React from "react";

const AddItemForm = ({
  listForm,
  submitHandler,
  title,
  onChangeHandler,
  setEditMode,
}) => {
  return (
    <div className="">
      <div className="">
        <form>
          <textarea
            value={title}
            onChange={onChangeHandler}
            cols="30"
            row="2"
            className="bg-gray-300 text-lg rounded border"
          ></textarea>
        </form>
      </div>
      <div className="flex items-center justify-center gap-6">
        <button
          className="bg-blue-950 text-white text-lg p-2 rounded"
          onClick={submitHandler}
        >
          {listForm ? "Add List" : "Add/Update Task"}
        </button>
        <p
          className="text-red-800 text-lg font-bold cursor-pointer"
          onClick={() => setEditMode(false)}
        >
          X
        </p>
      </div>
    </div>
  );
};

export default AddItemForm;
