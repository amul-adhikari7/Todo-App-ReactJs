import ListItem from "./components/ListItem";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const deleteTodo = (key) => {
    let newTodo = [...todoList];
    newTodo.splice(key, 1);
    setTodoList([...newTodo]);
  };

  return (
    <div className="main-container min-h-screen relative w-full bg-gradient-to-br from-yellow-300 to-orange-900 flex items-center">
      <a
        target="_blank"
        href="https://github.com/sann-desh/Todo-List-React/tree/main"
      >
        <div className="repoLink absolute top-4 bg-gray-500 text-white left-4 p-2">
          Link to Repo
        </div>
      </a>
      <div className="mt-28 text-white font-bold pb-8 flex flex-col justify-center items-center w-full ">
        <h1 className="text-center underline text-3xl">Todo List</h1>
        <Form addTodo={addTodo} />
        <div className="list-container w-full p-2 text-white flex justify-center items-center flex-col lg:w-[900px]">
          {todoList.map((item, i) => (
            <ListItem
              key={i}
              heading={item.title}
              detail={item.details}
              index={i}
              deleteTodoItem={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
