import { Link } from "react-router-dom";
import mujerPC from "../assets/Images/mujerPC1.png";

const Login = () => {
  return (
    <section className="h-[100vh] w-[100vw] flex flex-col justify-end items-center text-[#DDA15E]">
      <h2 className="font-bold text-2xl">¡Bienvenido de nuevo!</h2>
      <img className="object-contain w-[60vw]" src={mujerPC} alt="mujerPC" />
      <form className="flex flex-col text-start gap-3 items-center font-semibold">
        <input
          className="w-[85vw] py-4 px-5 border-4 border-opacity-50 border-[#DDA15E] rounded-full placeholder-[#DDA15E]  "
          type="email"
          placeholder="Ingrese su Email"
        />
        <input
          className="w-[85vw] py-4 px-5 border-4 border-opacity-50 border-[#DDA15E] rounded-full placeholder-[#DDA15E] "
          type="password"
          placeholder="Ingrese su contraseña"
        />
        <a href="#" className="font-semibold">
          Olvide mi contraseña
        </a>
        <button
          className="bg-[#606C38] text-[#FEFAE0] py-4 w-[85vw] rounded-xl text-xl font-bold border-4 border-opacity-50 border-[#DDA15E]"
          type="submit"
        >
          ACCEDER
        </button>
        <p className="flex gap-1 font-semibold text-[#FEFAE0] mb-5 ">
          ¿No tienes una cuenta?
          <Link 
          className="text-[#DDA15E] font-bold" 
          to="/register">
            Registrate
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
