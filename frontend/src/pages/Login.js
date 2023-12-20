import { useState } from "react";
import { Background } from "../assets";
import { LoginInput } from "../components/LoginInput";

export const Login = () => {

    const [email, setEmail] = useState("")


  return (
    <div className=" w-screen h-screen relative overflow-hidden flex">
      {/*background image*/}
      <img src={Background} className=" w-full h-full object-cover absolute" />

      {/*content*/}
      <div className=" flex flex-col justify-between items-center w-[30%] md:w-508 h-full z-10 backdrop-blur-xl ml-auto p-4 px-6 py-12">
        <div className=" flex items-center justify-start gap-4 w-full">
          <p className=" text-zinc-950 font-semibold text-4xl">
            Desafio Grão Direto
          </p>
        </div>

        <div className=" flex flex-col items-center">
          <p className=" text-3xl font-semibold text-slate-900">Bem vindo!</p>
          <p className=" text-xl text-slate-800">Entre na sua conta</p>
        </div>

        <div className=" w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-72">
            <LoginInput />
        </div>


      </div>
    </div>
  );
};
