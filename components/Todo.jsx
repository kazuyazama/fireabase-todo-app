import classNames from "classnames";
import React, { useState } from "react";

const Todo = ({ data, handleUpdate, handleDelete, handleComplete }) => {
  const [newTask, setNewTask] = useState(data.task);

  const handleChange = (e) => {
    e.preventDefault();
    if (data.completed === true) {
      setNewTask(data.task);
    } else {
      data.task = "";
      setNewTask(e.target.value);
    }
  };

  return (
    <div className="">
      {data && (
        <div key={data.id} className="flex justify-between">
          <div className="flex items-center gap-2 my-2">
            <input
              type="text"
              // classNames={data.completed && " line-through"}
              className={classNames("w-60", data.completed && "line-through")}
              value={data.task === "" ? newTask : data.task}
              onChange={handleChange}
            />

            <img src={data.coverURL} className="w-8 h-8 rounded-full" alt="" />
          </div>
          <div className="ml-3 flex gap-3 items-center">
            <button onClick={() => handleComplete(data)} className=" ">
              完了
            </button>
            <button onClick={() => handleUpdate(data, newTask)} className=" ">
              編集
            </button>
            <button onClick={() => handleDelete(data)} className="">
              削除
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
