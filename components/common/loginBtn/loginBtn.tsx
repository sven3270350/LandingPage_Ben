import { cx } from "@emotion/css";
import React from "react";

interface LoginBtnProps {
  className?:string
  label?: string;
  setIsLogin?: (val: boolean) => void;
  isLogin?: boolean;
}

const LoginBtn: React.FC<LoginBtnProps> = ({ label, setIsLogin, isLogin, className }) => {
  return (
    // <div
    //   onClick={() => setIsLogin && setIsLogin(!isLogin)}
    //   className="signup-btn w-inline-block cursor-pointer w-[81px]"
    // >
    //   <div className="button__inner px-3 py-2 text-center">
    //     <div className="gradient opacity-30">
    //       <div
    //         style={{
    //           transform:
    //             "translate3d(18.909%, -100%, 0px) scale3d(1.5, 1.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    //           transformStyle: "preserve-3d",
    //           willChange: "transform",
    //         }}
    //         className="gradient__ball gradient__ball--1"
    //       ></div>
    //       <div className="gradient__ball gradient__ball--2"></div>
    //     </div>
    //     <div className="relative">{label}</div>
    //   </div>
    //   <div className="gradient-glow">
    //     <div className="gradient__ball gradient__ball--1"></div>
    //     <div
    //       style={{
    //         transform:
    //           "translate3d(-17.519%, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    //         transformStyle: "preserve-3d",
    //         willChange: "transform",
    //       }}
    //       className="gradient__ball gradient__ball--2"
    //     ></div>
    //   </div>
    // </div>
    <div
      className={cx(
        "signup-btn w-[81px] h-[40px] flex items-center justify-center cursor-pointer text-center fuller-button",
        label === "Log in" ? "blue" : "red",
        className
      )}
      onClick={() => setIsLogin && setIsLogin(!isLogin)}
    >
      {label}
    </div>
  );
};

export default LoginBtn;
