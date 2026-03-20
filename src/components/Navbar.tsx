// import { FaLinkedin } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-0 w-full backdrop-blur bg-white/5 p-4 flex justify-between">
      <h1 className="font-bold">Ashish Kashyap</h1>
      <div className="flex gap-6">
        {/* <a
          href="https://in.linkedin.com/in/ashish-kashyap-b40917229"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text(--color-primary) transition"
        >
          <FaLinkedin size={20} />
        </a> */}
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
