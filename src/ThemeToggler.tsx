import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/themeSlice.ts";
import { RootState } from "./redux/store.ts";
import { useEffect } from "react";

const ThemeToggler: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex items-center justify-center">
      
      <div className="block md:hidden">
        <button
          onClick={handleToggle}
          className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-800 flex items-center justify-center transition-colors"
        >
          <span className="text-xl">🌙</span>
        </button>
      </div>

      
      <div
        className="hidden md:flex w-36 h-10 bg-gray-300 dark:bg-black-800 rounded-full p-1 cursor-pointer items-center transition-all"
        onClick={handleToggle}
      >
        <div
          className={`h-8 w-20 flex items-center justify-center text-sm font-semibold rounded-full bg-white transition-all ${
            theme === "light" ? "ml-0 bg-white text-black" : "ml-auto bg-gray-900 text-white"
          }`}
        >
          {theme === "light" ? "Light Mode" : "Dark"}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggler;
