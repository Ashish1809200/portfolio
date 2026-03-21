// import { FaLinkedin } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed z-10 top-0 w-full backdrop-blur bg-white/5 p-4 flex justify-between">
      <h1 className="font-bold">Ashish Kashyap</h1>
      <div className="flex gap-6">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-(--color-surface)
          hover:bg-(--color-primary)
          transition"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
