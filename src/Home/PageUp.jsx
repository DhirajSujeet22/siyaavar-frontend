import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageUp = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, location.search]);

  return null;
};

export default PageUp;
