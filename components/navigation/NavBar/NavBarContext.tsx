import React, { createContext, useContext, useState } from "react";

type NavbarContextProps = {
  isNavMenuShowing: boolean;
  setIsNavMenuShowing: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarContext = createContext<NavbarContextProps>({
  isNavMenuShowing: false,
  setIsNavMenuShowing: () => {},
});

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [isNavMenuShowing, setIsNavMenuShowing] = useState<boolean>(false);

  return (
    <NavbarContext.Provider value={{ isNavMenuShowing, setIsNavMenuShowing }}>
      {children}
    </NavbarContext.Provider>
  );
}

export const useNavbarContext = () => {
  const { isNavMenuShowing, setIsNavMenuShowing } = useContext(NavbarContext);

  const showNavMenu = () => {
    setIsNavMenuShowing(true);
  };

  const hideNavMenu = () => {
    setIsNavMenuShowing(false);
  };

  return { isNavMenuShowing, showNavMenu, hideNavMenu };
};
