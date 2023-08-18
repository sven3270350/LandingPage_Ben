import { useMedia } from "react-use";

export const useMediaSize = () => {
  const isMobile = useMedia("(max-width: 833px)", false);
  const isTablet = useMedia(
    "(min-width: 834px) and (max-width: 1439px)",
    false
  );
  const isDesktop = useMedia("(min-width: 1440px)", false);

  return { isMobile, isTablet, isDesktop };
};
