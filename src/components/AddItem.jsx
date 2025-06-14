import React from "react";

const AddItem = ({ listAddItem, setEditMode }) => {
  return (
    <div
      className={
        listAddItem
          ? "bg-gray-600 border rounded p-4 text-white font-semibold text-lg shadow-lg"
          : "bg-indigo-700 rounded p-4  font-semibold text-lg shadow-lg"
      }
      onClick={() => setEditMode(true)}
    >
      <p className="text-xl font-bold text-gray-950">+</p>
      <p className="text-lg font-semibold text-gray-600">
        {listAddItem ? "Add A List" : "Add A Task"}
      </p>
    </div>
  );
};

export default AddItem;
