import Image from "next/image";

export default function Home() {
  return (

    <div className="flex felx-col items-center justify-center min-h-screen py-2 bg-black">

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-purple-950 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5"> 
            <div>LOGO DE GAIT</div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-gray-300 mb-8">Iniciar Sesión</h2>  
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 w-64 p-2 flex items-center mb-3">
                <input type="email" name="email" placeholder="Email" className="bg-gray-300 text-black outline-none text-sm"/>
              </div>
            </div> 
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 w-64 p-2 flex items-center mb-5">
                <input type="password" name="password" placeholder="Contraseña" className="bg-gray-300 text-black outline-none text-sm"/>
              </div>
            </div>
            <div className="flex flex-col items-center mb-5">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-300">¿Olvidaste tu Contraseña?</a>
            </div>
            <a href="#" className="border-2 border-gray-300 rounded-full px-12 py-2 font-semibold hover:bg-gray-300 hover:text-black">Iniciar Sesion</a>      
          </div>
          
          <div className="w-2/5 bg-gray-300 text-black rounded-tr-2xl rounded-br-2xl py-35 px-15"> 
            <h2 className="text-3xl font-bold mb-10">Bienvenido a GAIT</h2>
            <p className="mb-10 ">¿Aún no tienes un usuario? Solicita tus credenciales de registro</p>
            <a href="#" className="border-2 border-black rounded-full px-12 py-2 font-semibold hover:bg-purple-950 hover:text-gray-300">Regístro</a>
          </div>
        </div>  
      </main>
      
    </div>
  );
}
