import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Collapse,
  IconButton,
  Navbar,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function NavList({ setOpenNav }) {
  const handleNavLinkClick = () => {
    setOpenNav(false); // Set openNav to false when a NavLink is clicked
  };

  return (
    <ul className="text-black my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

      {/* <NavLink
        to="/masar/"  
        // className="flex items-center hover:text-blue-500 transition-colors"
        className={({isActive, isPending})=> (!isPending)? "text-blue-500" : "flex items-center hover:text-blue-500 transition-colors"}

        onClick={handleNavLinkClick} 
        >
         الرئيسية
      </NavLink> */}
      
      <NavLink
        to="/masar/scanner"
        // className="flex items-center hover:text-blue-500 transition-colors"
        className={({isActive, isPending})=> (isActive)? "text-blue-500" : "flex items-center hover:text-blue-500 transition-colors"}

        onClick={handleNavLinkClick} 
      >
        إختر وجهتك
      </NavLink>

      <NavLink
        to="/masar/about"
        // className="flex items-center hover:text-blue-500 transition-colors"
        className={({isActive, isPending})=> (isActive)? "text-blue-500" : "flex items-center hover:text-blue-500 transition-colors"}
        onClick={handleNavLinkClick} 
      >
        من نحن؟
      </NavLink>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      className="mx-auto px-6 py-3 w-full rounded-md bg-blue-50"
      fullWidth={true}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="cursor-pointer py-1.5 flex items-center">
          <img src="logo.png" alt="logo" className="w-10 h-auto" />
          <NavLink to="masar-latest/" >
            <h1>مسار بلا حواجز</h1>
          </NavLink>
        </div>

        <div className="hidden lg:block">
          <NavList setOpenNav={setOpenNav} /> {/* Pass setOpenNav to NavList */}
        </div>
        <IconButton
          variant="text"
          className="mr-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList setOpenNav={setOpenNav} /> {/* Pass setOpenNav to NavList */}
      </Collapse>
    </Navbar>
  );
}
