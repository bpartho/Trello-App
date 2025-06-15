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
      <div className="flex  gap-4">
        <p className="text-xl font-bold text-white">+</p>
        <p className="text-lg font-semibold text-white">
          {listAddItem ? "Add A List" : "Add A Task"}
        </p>
      </div>
    </div>
  );
};

export default AddItem;
