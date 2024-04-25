import React, { useEffect, useState, createContext, useContext } from 'react';
import { vakantInfo } from '../constants/data';

// Context yaratish
export const ThemeContext = createContext();

// Provider komponenti
export const MyProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // localStorage dan darkMode-ni olish
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    return savedMode || false;
  });

  useEffect(() => {
    // darkMode o'zgarishi bo'lganda localStorage ga saqlash
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const [searchStr, setSearchStr] = useState("");
  const filteredData = vakantInfo.filter((item) =>
  Object.values(item).some(
    (value) =>
      typeof value === "string" &&
      value.toLowerCase().includes(searchStr.toLowerCase())
  )
);

  const handleSearch = (e) => {
    setSearchStr(e.target.value);
  }


  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, handleSearch, filteredData, searchStr }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Komponentlarga murojaat
export const useTheme = () => useContext(ThemeContext);
