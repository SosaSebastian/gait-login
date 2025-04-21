import Image from "next/image";

export default function Home() {
  return (

    <div className="flex felx-col items-center justify-center min-h-screen py-2 bg-black">

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-purple-950 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5"> 
            <p>login section</p> 
          </div>
          <div className="w-2/5 bg-gray-300 text-black rounded-tr-2xl rounded-br-2xl py-35 px-15"> 
            <h2 className="text-3xl font-bold mb-10">Bienvenido a GAIT</h2>
            <p className="mb-10 ">¿Aún no tienes un usuario? Solicita tus credenciales de registro</p>
            <a href="#" className="border-2 border-black rounded-full px-12 py-2 font-semibold">Regístro</a>
          </div>
        </div>  
      </main>
      
    </div>
  );
}
