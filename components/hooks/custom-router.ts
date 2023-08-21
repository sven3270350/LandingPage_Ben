import { ROUTE_PATH } from "./route-path";
import { useRouter } from "next/router";

export const useCustomRouter = () => {
  const router = useRouter();

  const goToHome = () => {
    return router.push(ROUTE_PATH.HOME);
  };

  const goToLogin = () => {
    return router.push(ROUTE_PATH.Login);
  };

  const goToSignup = () => {
    return router.push(ROUTE_PATH.Signup);
  };

  const goToForgotPassword = () => {
    return router.push(ROUTE_PATH.ForgotPassword);
  };

  const goToManualSignUp = () => {
    return router.push(ROUTE_PATH.ManualSignUp);
  };

  const goToChangePassword = () => {
    return router.push(ROUTE_PATH.ChangePassword);
  };

  const goToNewEmail = (email: string) => {
    return router.push(
      {
        pathname: `${ROUTE_PATH.NewEmail}`,
        query: { email: email },
      },
      `${ROUTE_PATH.NewEmail}`
    );
  };

  return {
    goToHome,
    goToLogin,
    goToSignup,
    goToForgotPassword,
    goToManualSignUp,
    goToChangePassword,
    goToNewEmail,
  };
};
