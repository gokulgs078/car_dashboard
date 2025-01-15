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
      <div
        className="w-20 md:w-36 h-10 bg-gray-300 dark:bg-gray-800 rounded-full p-1 flex items-center cursor-pointer transition-all"
        onClick={handleToggle}
      >
        <div
          className={`h-8 w-8 md:w-20 flex items-center justify-center text-sm font-semibold rounded-full bg-white transition-all ${
            theme === "light" ? "ml-0 text-black" : "ml-auto text-black"
          }`}
        >
          {/* Show text for desktop and icon for mobile */}
          <span className="hidden md:block">{theme === "light" ? "Light Mode" : "Dark"}</span>
          <span className="block md:hidden">{theme === "light" ? "☀️" : "🌙"}</span>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggler;
