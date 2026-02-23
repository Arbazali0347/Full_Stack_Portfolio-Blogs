import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-neutral-900 to-[#141414] text-white px-6">
      {/* Big 404 Text */}
      <h1 className="text-9xl font-extrabold tracking-wide text-white/20 mb-6 select-none">
        404
      </h1>

      {/* Message */}
      <p className="text-center text-xl md:text-2xl text-white/60 mb-8 max-w-md">
        Oops! The page you are looking for does not exist.
        <br />
        It might have been removed or the URL is incorrect.
      </p>

      {/* Go Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 text-white font-medium"
      >
        <ChevronLeft size={20} /> Go Back Home
      </button>

      {/* Optional small glowing shapes */}
      <div className="absolute top-10 -left-10 w-72 h-72 bg-white/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-white/5 rounded-full blur-[130px] animate-pulse"></div>
    </div>
  );
};

export default NotFound;