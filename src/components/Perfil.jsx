import perfil from "../assets/Images/perfil.png";

export const Perfil = () => {
  return (
    <>
      <div className="bg-[#07140A] flex w-[90vw] text-[#FEFAE0] mt-5 px-3 py-2 rounded-xl items-center">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="bg-[#606C38] rounded-xl text-center flex flex-col items-center justify-center w-[20vw] py-1 px-3">
              <h3 className="text-white font-medium text-xl">Tareas </h3>
              <p className="text-3xl -mt-1 font-bold">10</p>
            </div>
            <p className="font-semibold text-md">
              ¡Haz de hoy un dia productivo!
            </p>
          </div>

          <h2 className="text-2xl font-bold">
            Bienvenido, <br /> Daniel Arlantt
          </h2>
        </div>
        <img className="w-[32vw] h-[30vw] " src={perfil} alt="fotoPerfil" />
      </div>
    </>
  );
};
