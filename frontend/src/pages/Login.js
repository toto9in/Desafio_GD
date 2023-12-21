import { useState } from "react";
import { Background } from "../assets";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { useForm } from "react-hook-form";
import { fadeInOut } from "../animations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import apiClient from "../api/http-common"

export const LoginInput = ({ register, name, placeHolder, type }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <motion.div
      {...fadeInOut}
      className={`box-border flex items-center justify-center gap-4 bg-gray-200 backdrop-blur-md rounded-md w-full px-4 py-4 ${
        isFocus ? "border-b-2 border-red-600" : "border-b-0"
      }`}
    >
      <input
        {...register(name)}
        type={type}
        placeholder={placeHolder}
        className="w-full h-full bg-transparent text-gray-800 text-lg font-semibold border-none outline-none"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </motion.div>
  );
};

const sendLoginCredentials = async (data) => {

  try {
    const response = await apiClient.post("/users/login", data)
    if(response.status === 200) {
      return response
    }    
  } catch (error) {
    if (error.response.status === 401) {
      alert("Email ou senha incorretos")
    }
  }
  
}

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const schema = isSignUp
    ? yup.object().shape({
        email: yup.string().email().required("Digite um email válido"),
        password: yup.string().required("Digite uma senha"),
        fullName: yup.string().required("Digite o seu nome"),
        confirm_password: yup
          .string()
          .oneOf([yup.ref("password"), null], "As senhas não sao iguais")
          .required("Confirme a sua senha"),
      })
    : yup.object().shape({
        email: yup.string().email().required("Digite um email válido"),
        password: yup.string().required("Digite uma senha"),
      });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUpClick = () => {
    setIsSignUp(true);
    reset();
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
    reset();
  };

  const navigate = useNavigate();

  //use useNavigate hook from react-router-dom
  //https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
  const onSubmit = async (data) => {
    try {
      const response = await sendLoginCredentials(data)
        localStorage.setItem("token", response.data.token)
        navigate("/main")
    } catch (error) {
      
    }
  };

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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full flex flex-col items-center justify-center gap-6 px-3 md:px-8 py-8"
        >
          {isSignUp && (
            <>
              {isSubmitted && errors.fullName && (
                <p>{errors.fullName.message}</p>
              )}
              <LoginInput
                register={register}
                name="fullName"
                placeHolder="Nome"
                type="text"
              />
            </>
          )}

{isSubmitted && errors.email && <p>{errors.email.message}</p>}
          <LoginInput
            register={register}
            name="email"
            placeHolder="Email"
            type="email"
          />

{isSubmitted && errors.password && <p>{errors.password.message}</p>}
          <LoginInput
            register={register}
            name="password"
            placeHolder="Senha"
            type="password"
          />

          {isSignUp && (
            <>
                {isSubmitted && errors.confirm_password && (
                  <p>{errors.confirm_password.message}</p>
                )}
              <LoginInput
                register={register}
                name="confirm_password"
                placeHolder="Confirmar senha"
                type="password"
              />
            </>
          )}
          {!isSignUp ? (
            <p className=" text-lg">
              Não tem uma conta?{" "}
              <motion.button
                type="button"
                {...buttonClick}
                className=" text-red-600 cursor-pointer font-bold"
                onClick={handleSignUpClick}
              >
                Cadastre-se
              </motion.button>{" "}
            </p>
          ) : (
            <p className=" text-lg">
              Já tem uma conta?{" "}
              <motion.button
                type="button"
                {...buttonClick}
                className=" text-red-600 cursor-pointer font-bold"
                onClick={handleSignInClick}
              >
                Entrar
              </motion.button>{" "}
            </p>
          )}

          <motion.button
            type="submit"
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
