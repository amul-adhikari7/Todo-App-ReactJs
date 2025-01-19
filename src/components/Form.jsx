import { useState } from "react";

const Form = ({ addTodo }) => {
  const [info, setInfo] = useState({ title: "", details: "" });

  const submit = (e) => {
    addTodo(info);
    e.preventDefault();
    setInfo({ title: "", details: "" });
  };

  return (
    <div className="w-[90%]">
      <form
        action=""
        className="w-full pt-8 px-8 flex flex-col justify-center text-black items-center"
      >
        <input
          type="text"
          className="transparent m-4 py-2 px-4 rounded-lg w-full sm:w-[400px]"
          placeholder="Enter your todo..."
          onChange={(e) => {
            setInfo({ ...info, title: e.target.value });
          }}
          id="todo"
          value={info.title}
        />

        {info.title && (
          <>
            <textarea
              name="details"
              id="details"
              className="transparent m-4 py-2 px-4 rounded-lg w-full sm:w-[400px]"
              rows="5"
              placeholder="Enter Details..."
              onChange={(e) => setInfo({ ...info, details: e.target.value })}
              value={info.details}
            ></textarea>
            <button
              type="submit"
              className="text-white py-2 px-8 bg-gradient-to-br rounded-lg from-red-600 to bg-red-900 hover:bg-gradient-to-br hover:from-red-500 to-red-950"
              onClick={(e) => {
                submit(e);
              }}
            >
              Add
            </button>
          </>
        )}
      </form>
    </div>
  );
};
export default Form;
