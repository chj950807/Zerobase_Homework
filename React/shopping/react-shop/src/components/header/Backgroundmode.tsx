import React from "react";
import { useEffect } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

enum ThemeEnums{
  Light = 0,
  Dark = 1,
};

const { Light, Dark } = ThemeEnums;

const getTheme = (): ThemeEnums => {
  const theme: number = Number(localStorage.getItem("theme"));

  if (theme === Dark) {
    return Dark;
  }
  return Light;
};

const themeMode = atom<ThemeEnums>({
  key: 'themeMode',
  default: getTheme(),
})




export default function Backgroundmode() {
  const [theme, setTheme] = useRecoilState<ThemeEnums>(themeMode);

  useEffect(() => {
    if (theme === Dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeSwitch = () => {
    setTheme(theme === Dark ? Light : Dark);
  }

  return (
    <div className="flex justify-end w-full">
      <div
        className="text-3xl inline-block pr-3 content-center dark:text-white "
        onClick={themeSwitch}
      >
        {theme === Dark ? <HiOutlineSun /> : <HiOutlineMoon />}
      </div>
    </div>
  );
}
