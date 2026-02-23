import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Ye hook current page ka path batata hai (jaise '/about', '/contact')
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi pathname change hoga, page automatically top par chala jayega
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // Agar instant chahiye toh "smooth" hata kar "auto" kar do
    });
  }, [pathname]);

  // Is component ka koi UI nahi hai, is liye null return karega
  return null;
};

export default ScrollToTop;