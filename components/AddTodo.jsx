const AddTodo = ({setInputText,inputText,handleClick}) => {
  return (
    <form className="mb-10 flex items-center gap-2">
      <input
        type="text"
        className="w-80 h-12"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleClick}
        className="bg-yellow-300 px-5 h-12 rounded-xl"
      >
        追加
      </button>
    </form>
  );
};

export default AddTodo;
