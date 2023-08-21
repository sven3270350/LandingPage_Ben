import { ROUTE_PATH } from './route-path';
import { useRouter } from 'next/router';

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
    return router.push(ROUTE_PATH.goToManualSignUp);
  };

  return {
    goToHome,
    goToLogin,
    goToSignup,
    goToForgotPassword,
    goToManualSignUp,
  };
};
