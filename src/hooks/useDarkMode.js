import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    // const [darkMode, setDarkMode] = useState(false);
    const [darkMode, setDarkMode] = useLocalStorage('isDark', false)

    return [darkMode, setDarkMode];
}

export default useDarkMode;