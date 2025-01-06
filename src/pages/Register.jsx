import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-[100vh] w-[100vw] flex flex-col justify-end items-center text-[#DDA15E] gap-5">
      <h2 className="font-bold text-2xl">¡Bienvenido a TheBoard!</h2>
      <p className="text-center w-[45vw] font-medium text-[#FEFAE0]">
        Tu espacio para organizar, priorizar y lograr todo lo que te propongas.
      </p>
      <form className="flex flex-col text-start gap-3 items-center font-semibold">
      <input
          className="w-[85vw] py-4 px-5 border-4 border-opacity-50 border-[#DDA15E] rounded-full placeholder-[#DDA15E]  "
          type="text"
          placeholder="Cree un nombre de usuario"
        />
        <input
          className="w-[85vw] py-4 px-5 border-4 border-opacity-50 border-[#DDA15E] rounded-full placeholder-[#DDA15E]  "
          type="email"
          placeholder="Ingrese un Email"
        />
        <input
          className="w-[85vw] py-4 px-5 border-4 border-opacity-50 border-[#DDA15E] rounded-full placeholder-[#DDA15E] "
          type="password"
          placeholder="Ingrese una contraseña"
        />
        <input
          className="w-[85vw] py-4 px-5 border-4 border-opacity-50 border-[#DDA15E] rounded-full placeholder-[#DDA15E] "
          type="password"
          placeholder="Confirme la contraseña"
        />

        <button
          className="bg-[#606C38] text-[#FEFAE0] py-4 w-[85vw] rounded-xl text-xl font-bold border-4 border-opacity-50 border-[#DDA15E] mt-2"
          type="submit"
        >
          ACCEDER
        </button>
        <p className="flex gap-1 font-semibold text-[#FEFAE0] mb-5 ">
          ¿Ya tienes una cuenta?
          <Link className="text-[#DDA15E]  font-bold" to="/">
            Iniciar Sesión
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
