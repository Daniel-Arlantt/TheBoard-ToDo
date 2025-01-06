import { Perfil } from "../components/Perfil";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

const ToDo = () => {
  // const [tareas, setTareas] = useState(0)

  //TODO: Añadir tareas, grap and drop, popup

  return (
    <section className="flex flex-col items-center gap-5">
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

        <button className="bg-[#07140A] text-white placeholder-[#FEFAE0] font-bold p-3 rounded-lg text-3xl">
          <IoMdAdd />
        </button>
      </div>
    </section>
  );
};

export default ToDo;
