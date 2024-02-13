import React, { createContext, useContext, useEffect, useState } from 'react';
import { englishStrings } from 'resources/Strings/eng';
import { swedishStrings } from 'resources/Strings/swe';

export const AppDataContext = createContext({
  strings: englishStrings,
  currentLanguage: '',
  setLanguage: (value) => {
    return null;
  },
});

export const AppDataProvider = (props) => {
  const defaultLang = 'EN';
  const [language, setLanguage] = useState(defaultLang);
  const intialize = async () => {
    setLanguage(localStorage.getItem('language') || defaultLang);
  };

  useEffect(() => {
    intialize();
  }, []);

  const strings = () => {
    switch (language) {
      case 'EN':
        return englishStrings;
      case 'SWE':
        return swedishStrings;
      default:
        return englishStrings;
    }
  };
  return (
    <AppDataContext.Provider
      value={{
        strings: strings(),
        currentLanguage: language,
        setLanguage: (value) => {
          localStorage.setItem('language', value);
          setLanguage(value);
        },
      }}
    >
      {props.children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
