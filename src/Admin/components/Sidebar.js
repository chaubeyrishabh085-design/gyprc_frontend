import { useEffect, useState } from "react";
import { useRef } from "react";
// import { SubMenu } from "../components/SubMenu";
import { motion, AnimatePresence } from "framer-motion";
import routes from "../AdminRoute/Route";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";


export const Sidebar = ({children}) => {
let isTabletMid = useMediaQuery({ query: "(max-width: 767px)" });
const [open, setOpen] = useState(isTabletMid ? false : true);
const sidebarRef = useRef();
const { pathname } = useLocation();

useEffect(() => {
if (isTabletMid) {
setOpen(false);
} else {
setOpen(true);
}
}, [isTabletMid]);

useEffect(() => {
isTabletMid && setOpen(false);
}, [pathname]);

const Nav_animation = isTabletMid
? {
  open: {
    x: 0,
    width: "16rem",
    transition: {
      damping: 40,
    },
  },
  closed: {
    x: -250,
    width: 0,
    transition: {
      damping: 40,
      delay: 0.15,
    },
  },
}
: {
  open: {
    width: "16rem",
    transition: {
      damping: 40,
    },
  },
  closed: {
    width: "4rem",
    transition: {
      damping: 40,
    },
  },
};

const subMenusList = [
{
name: "build",
icon: RiBuilding3Line,
menus: ["auth", "app settings", "stroage", "hosting"],
},
{
name: "analytics",
icon: TbReportAnalytics,
menus: ["dashboard", "realtime", "events"],
},
];

return (
<div className="flex " >

<div className="bg-orange-50"> 
<div 
  onClick={() => setOpen(false)}
  className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
    open ? "block" : "hidden"
  } `}
></div>
<motion.div
  ref={sidebarRef}
  variants={Nav_animation}
  initial={{ x: isTabletMid ? -250 : 0 }}
  animate={open ? "open" : "closed"}
  className=" bg-gray-50 text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
      overflow-hidden md:relative fixed
   h-screen "
> <NavLink to="/admin" >
  <div className="flex items-center font-medium border-b py-3 border-slate-300 cursor-pointer  mx-3">
    <span className="text-2xl font-bold whitespace-pre py-10 text-gray-900 ">Hr Portal</span>
  </div>
  </NavLink>

  <div className="nav-link flex flex-col  h-full">
    <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
      <li>
        {routes.map((route)=>(
                  <NavLink style={activeColor}to={route.path} key={route.e}
                   className="link items-center flex gap-3 py-1 mb-3 text-gray-700 text-lg font-medium transition hover:text-red-600 " >
                      <div className="icon text-xl">{route.icon}</div>
                      <AnimatePresence>
                      <motion.div className="link_text nowrap  ">{route.name}</motion.div>
                      </AnimatePresence>
                  </NavLink>
              ))}
      </li>
    </ul>
 
  </div>
 {/* hamburgerIcon */}
</motion.div>
<div className="m-3 md:hidden " onClick={() => setOpen(true)}>
  <MdMenu size={25} />
</div>

</div>

<main className=" w-[100%]  bg-orange-50" >{children}</main></div>
);
};

const activeColor=({isActive})=>{
return(
{color:isActive?"red":"black"}
);
}


