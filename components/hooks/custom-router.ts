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

  return {
    goToHome,
    goToLogin,
    goToSignup,
  };
};
