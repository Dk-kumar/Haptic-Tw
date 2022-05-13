import { useState } from "react";
import NavBar from "./NavBar";

const NavBarLogic = () => {
  const navLinks = [
    { id: 1, link: "Application A" },
    { id: 2, link: "Application B" },
    { id: 3, link: "Application C" },
    { id: 4, link: "Application D" },
  ];

  const [activeIndex, setActive] = useState(0)

  const containerStates = {
    navLinks: navLinks,
    activeIndex: activeIndex
  };

  const containerFunctions = {
      setActive: setActive
  }

  return <NavBar {...containerStates} {...containerFunctions} />;
};

export default NavBarLogic;
