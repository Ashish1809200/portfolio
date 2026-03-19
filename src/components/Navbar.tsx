import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="fixed top-0 w-full backdrop-blur bg-white/5 p-4 flex justify-between">
      <h1 className="font-bold">Ashish Kashyap</h1>
      <div className="flex gap-6">
        <button onClick={toggleTheme}>Theme</button>
      </div>
    </div>
  );
};

export default Navbar;
