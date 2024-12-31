import React, { createContext, useContext, useState } from "react";

type NavBarContextProps = {
  isNavMenuShowing: boolean;
  setIsNavMenuShowing: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBarContext = createContext<NavBarContextProps>({
  isNavMenuShowing: false,
  setIsNavMenuShowing: () => {},
});

export function NavBarProvider({ children }: { children: React.ReactNode }) {
  const [isNavMenuShowing, setIsNavMenuShowing] = useState<boolean>(false);

  return (
    <NavBarContext.Provider value={{ isNavMenuShowing, setIsNavMenuShowing }}>
      {children}
    </NavBarContext.Provider>
  );
}

export const useNavBarContext = () => {
  const { isNavMenuShowing, setIsNavMenuShowing } = useContext(NavBarContext);

  const showNavMenu = () => {
    setIsNavMenuShowing(true);
  };

  const hideNavMenu = () => {
    setIsNavMenuShowing(false);
  };

  return { isNavMenuShowing, showNavMenu, hideNavMenu };
};
