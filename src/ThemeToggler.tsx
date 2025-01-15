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

  // Apply the theme to the html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={handleToggle}
      className="px-4 py-2 rounded focus:outline-none transition-colors 
                 bg-gray-200 dark:bg-gray-600 text-black dark:text-white"
    >
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeToggler;
