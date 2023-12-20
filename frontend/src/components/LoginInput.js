import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../animations";

export const LoginInput = ({
  placeHolder,
  inputState,
  inputStateFunc,
  type,
  isSignUp,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <motion.div {...fadeInOut}
      className={`box-border flex items-center justify-center gap-4 bg-gray-200 backdrop-blur-md rounded-md w-full px-4 py-4 ${
        isFocus ? "border-b-2 border-red-600" : "border-b-0"
      }`}
    >
      <input
        type={type}
        placeholder={placeHolder}
        className="w-full h-full bg-transparent text-gray-800 text-lg font-semibold border-none outline-none"
        value={inputState}
        onChange={(e) => inputStateFunc(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </motion.div>
  );
};
