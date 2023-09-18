import { cx } from "@emotion/css";
import React from "react";
import { useCustomRouter } from "components/hooks/custom-router";

interface LoginBtnProps {
  className?: string;
  label?: string;
  setIsLogin?: (val: boolean) => void;
  isLogin?: boolean;
}

const LoginBtn: React.FC<LoginBtnProps> = ({
  label,
  setIsLogin,
  isLogin,
  className,
}) => {
  const { goToLogin, goToSignup } = useCustomRouter();

  return (
    <div
      className={cx(
        "signup-btn w-[81px] h-[40px] flex items-center justify-center cursor-pointer text-center fuller-button hover:text-white text-[#2F4644] red",
        label === "Log in" && "blue",
        label === "Sign up" && "red",
        className
      )}
      onClick={() => {
        // setIsLogin && setIsLogin(!isLogin);
        {
          label === "Log in" && goToLogin();
          label === "Sign up" && goToSignup();
        }
      }}
    >
      {label}
    </div>
  );
};

export default LoginBtn;
