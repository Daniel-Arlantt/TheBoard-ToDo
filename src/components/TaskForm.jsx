import { useState } from "react";

const TaskForm = ({ handleCloseForm, handleAddTask }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    handleAddTask({
      title: title,
      description: description,
      priority: priority,
});
    handleCloseForm(); // Cierra el formulario
  };

  return (
    <section className="bg-[#07140A] text-white rounded-xl absolute flex-none top-[20vh] p-3">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 font-semibold"
      >
        <h2 className="text-[#DDA15E] text-xl font-bold rounded-xl">
          Añade una nueva tarea
        </h2>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titulo"
          className="bg-[#606C38] placeholder-white font-bold p-3 rounded-lg"
        />
        <textarea
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
          className="bg-[#606C38] placeholder-white font-bold p-3 rounded-lg"
        />

        <h3 className="text-[#DDA15E] font-bold rounded-xl -mb-2">Prioridad</h3>
        <div
          onChange={(e) => setPriority(e.target.value)}
          className="flex gap-3 font-bold"
        >
          <label className="flex gap-2 items-center text-[#BC6C25] ">
            <input type="radio" name="priority" value="Alta" />
            Alta
          </label>
          <label className="flex gap-2 items-center text-[#BC6C25]">
            <input type="radio" name="priority" value="Media" />
            Media
          </label>
          <label className="flex gap-2 items-center text-[#BC6C25]">
            <input type="radio" name="priority" value="Baja" />
            Baja
          </label>
        </div>
        <div className="flex justify-around">
          <button
            onClick={handleCloseForm}
            className="bg-[#606C38] text-[#FEFAE0] px-3 py-2 rounded-xl text-xl font-bold border-4 border-opacity-50 border-[#DDA15E]"
          >
            Cerrar
          </button>
          <button
            type="submit"
            className="bg-[#606C38] text-[#FEFAE0] px-3 py-2 rounded-xl text-xl font-bold border-4 border-opacity-50 border-[#DDA15E]"
          >
            Añadir
          </button>
        </div>
      </form>
    </section>
  );
};

export default TaskForm;
