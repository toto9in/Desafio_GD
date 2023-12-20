import { useState } from "react";
import { Background } from "../assets";
import { LoginInput } from "../components/LoginInput";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { useForm } from "react-hook-form";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => console.log("ue"); 

  return (
    <div className=" w-screen h-screen relative overflow-hidden flex">
      {/*background image*/}
      <img src={Background} className=" w-full h-full object-cover absolute" />

      {/*content*/}
      <div className=" flex flex-col items-center w-[30%] md:w-508 h-full z-10 backdrop-brightness-100 backdrop-contrast-50 backdrop-blur-md bg-white/40 ml-auto p-4 px-6 py-12">
        <div className=" flex items-center justify-start gap-4 w-full">
          <p className=" text-zinc-950 font-semibold text-4xl">
            Desafio Grão Direto
          </p>
        </div>

        <div className=" flex flex-col items-center pt-32">
          <p className=" text-3xl font-semibold text-slate-900">Bem vindo!</p>
          <p className=" text-xl text-slate-800 pt-1">
            {isSignUp ? "Cadastre a sua conta" : "Entre com a sua conta"}{" "}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=" w-full flex flex-col items-center justify-center gap-6 px-3 md:px-8 py-8">
          {isSignUp && (
            <LoginInput
              placeHolder={"Nome"}
              inputState={userName}
              inputStateFunc={setUserName}
              type="text"
              isSignUp={isSignUp}
              {...register("name")}
            />
          )}

          <LoginInput
            placeHolder={"Email"}
            inputState={email}
            inputStateFunc={setEmail}
            type="email"
            isSignUp={isSignUp}
            {...register("email")}
          />
          <LoginInput
            placeHolder={"Senha"}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignUp={isSignUp}
            {...register("password")}
          />

          {isSignUp && (
            <LoginInput
              placeHolder={"Confirmar senha"}
              inputState={confirm_password}
              inputStateFunc={setConfirmPassword}
              type="password"
              isSignUp={isSignUp}
              {...register("confirm_password")}
            />
          )}

          {!isSignUp ? (
            <p className=" text-lg">
              Não tem uma conta?{" "}
              <motion.button
                {...buttonClick}
                className=" text-red-600 cursor-pointer font-bold"
                onClick={() => setIsSignUp(true)}
              >
                Cadastre-se
              </motion.button>{" "}
            </p>
          ) : (
            <p className=" text-lg">
              Já tem uma conta?{" "}
              <motion.button
                {...buttonClick}
                className=" text-red-600 cursor-pointer font-bold"
                onClick={() => setIsSignUp(false)}
              >
                Entrar
              </motion.button>{" "}
            </p>
          )}

          <motion.button type="submit"
            {...buttonClick}
            className=" w-full px-4 py-4 rounded-md bg-red-600 cursor-pointer text-white text-2xl capitalize hover:bg-red-700 font-bold"
          >
            {isSignUp ? "Cadastrar" : "Entrar"}
          </motion.button>
        </form>
      </div>
    </div>
  );
};
