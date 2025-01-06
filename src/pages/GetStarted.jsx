import { Link } from "react-router-dom";
import mujerPC from "../assets/Images/mujerPC1.png";

export const GetStarted = () => {
  return (
    <section className="h-[100vh] w-[100vw] flex flex-col justify-end items-center text-[#FEFAE0] gap-5 text-center">
      <img className="object-contain w-[70vw]" src={mujerPC} alt="mujerPC" />
        <h2 className="font-bold text-2xl text-[#DDA15E]">Todo bajo conotrol, siempre</h2>
        <p className="font-semibold w-[80vw]">
          Olvídate de los papeles y las notas perdidas. Con TheBoard, guarda
          todas tus tareas en un solo lugar. Organízalas, añade fechas de
          vencimiento y recibe recordatorios para mantener todo bajo control
        </p>
        <Link
          className="bg-[#606C38] py-4 w-[85vw] rounded-xl text-xl font-bold border-4 border-opacity-50 border-[#DDA15E] mb-5"
          to="/todo"
        >
          GetStarted
        </Link>
    </section>
  );
};

export default GetStarted;
