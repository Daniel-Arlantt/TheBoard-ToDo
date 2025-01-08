import Perfil from "../components/Perfil.jsx";
import { IoMdAdd, IoMdSearch } from "react-icons/io";
import TaskForm from "../components/TaskForm.jsx";
import { useState } from "react";


const ToDo = () => {
  const [form, setForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleOpenForm = () => {
    setForm(true);
  };

  const handleCloseForm = () => {
    setForm(false);
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <section className="flex flex-col items-center gap-5 relative">
      <Perfil />

      <div className="flex gap-4 p-3 rounded-xl bg-[#07140A] text-white font-semibold">
        <button className="bg-[#606C38] rounded-lg px-3 py-1">Todas</button>
        <button className="bg-[#606C38] rounded-lg px-3 py-1">
          Pendientes
        </button>
        <button className="bg-[#606C38] rounded-lg px-3 py-1">
          Completadas
        </button>
      </div>

      <div className="flex justify-evenly w-[90vw] relative ">
        <span className="absolute inset-y-0 left-[20vw] text-2xl flex items-center text-[#FEFAE0]">
          <IoMdSearch />
        </span>
        <input
          className="bg-[#07140A] text-white placeholder-[#FEFAE0] font-bold pl-9  rounded-lg placeholder:text-center "
          type="search"
          placeholder="Buscar tarea"
        />

        <button onClick={handleOpenForm} className="bg-[#07140A] text-white placeholder-[#FEFAE0] font-bold p-3 rounded-lg text-3xl">
          <IoMdAdd />
        </button>
      </div>

      {form ? <TaskForm handleCloseForm={handleCloseForm} onSubmit={handleAddTask} /> : ""}

      <ul className="w-[90vw] bg-[#07140A] text-white rounded-lg p-3">
        {tasks.map((task, index) => (
          <li key={index} className="flex flex-col gap-2 p-2 border-b">
            <h3 className="text-[#DDA15E] font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <span className="text-[#BC6C25]">{task.priority}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToDo;
