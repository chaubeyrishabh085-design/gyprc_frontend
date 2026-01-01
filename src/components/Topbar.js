import React, { useEffect,  useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ChangePassword, Logout } from "./Login";
import { postData1 } from "../APIs";
import { useDispatch } from "react-redux";
import { setUserData } from "../Redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

export const TopBar = (props) => {
  const [empData, setEmpData] = useState({});
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("user_type");
    localStorage.removeItem("username");
    localStorage.removeItem("ut");
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("user_type") !== "consultancy_user") {
      (async () => {
        const res = await postData1("api/v1/get_emp_detail/", {}, true);
        if (res?.status_code === 200) {
          console.log(res?.data);
          setEmpData(res?.data);
          dispatch(setUserData(res?.data));
        }
      })();
    }
    
  }, []);

  console.log(empData)

  return (
    <>

     {localStorage.getItem("user_type") === "consultancy_user" || localStorage.getItem("user_type") === "admin_user" ? <div>
      <navbar>
      <div class='w-full bg-gray-100 py-3 border-b'>

        <div class='flex justify-between px-20 items-center font-semibold'>
          <div>
            <h1 class="text-2xl">Welcome to GYPRC</h1>
          </div>
          <div>
            <div class="relative">
              <button class="py-2 px-6 bg-gray-800 flex flex-row items-center justify-center text-white whitespace-nowrap rounded-3xl font-semibold" onClick={toggleDropdown}>
                {localStorage.getItem("username")} <MdOutlineKeyboardArrowDown width={40} height={40} size={20} className="ml-2" fill="#fff" color="#fff"  />
              </button>
              {isOpen && (
                <div class="absolute right-0 bg-white w-  rounded-md shadow-lg p-2 z-10">
                  <ul className="">
                    <li>
                      <button onClick={()=>setIsChangePasswordOpen(true)} class="block px-4 py-2 whitespace-nowrap text-sm text-gray-700 hover:bg-gray-100">
                        Change Password
                      </button>
                    </li>
                    <li>
                    <h4
                      onClick={handleLogout}
                      className="hover:bg-red-50 hover:text-gray-900 transition duration-300 ease-in-out text-center text-base font- rounded mb-1 bg-blue-900 text-white py-1 hover:cursor-pointer "
                    >
                      Logout
                    </h4>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
      </div>
    </navbar>
    {isChangePasswordOpen && (
      <ChangePassword setIsChangePasswordOpen={setIsChangePasswordOpen} />
    )}
    

     </div>:
     <div className="container topbar flex wrap justify-around  gap-x-2 w-[96vw] xl:w-[80vw] sm:mb-0 lg:mb-2 ">
     <div className=" topbarLeft flex text-center relative bottom-2  items-center  px-auto sm:py-1 lg:py-3">
       <input
         className="border outline-none bg-gray-50  text-base py-1 px-2 rounded w-[30vw] md:w-[25vw] xl:w-[40vw]  "
         type="text"
         placeholder="Search"
       />
       <div className="search_icon text-gray-500 relative right-8 ">
         <BiSearch />
       </div>
       <div></div>
     </div>
     {/* Top right ------ */}
     <div className="topbarRight flex   rounded items-center">
       <div className="profile flex text-center justify-items-end text-xl  mt-2  gap-4 text-gray-500  ">
         <div className="mt-1 text-3xl">
           <IoIosNotifications />
           <span className="bg-red-700 rounded-full px-1  text-white  relative left-3 bottom-12 md:bottom-12  xl:bottom-12  text-xs font-bold ">
             0
           </span>
         </div>
         <div className="mt-2 text-2xl">
           {" "}
           <FaMessage />
         </div>

         <div className="flex gap-x-1 md:gap-x-3">
           {/* <img className="rounded-full w-8 md:w-12 h-8 md:h-12 mt-1" src={ img1 } alt="" /> */}
           <div className="ProfileDrop ">
             <div className="relative inline-block text-left">
               <button
                 onClick={toggleDropdown}
                 onMouseEnter={() => toggleDropdown(true)}
                 type="button"
                 className="inline-flex items-center px-2 md:px-4 py-2 text-xs md:text-base	 font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50"
               >
                 <span className="hidden md:block">
                   {" "}
                   {`${
                     empData?.first_name ? empData?.first_name : "Admin"
                   } ${empData?.last_name ? empData?.last_name : ""}`}{" "}
                 </span>
                 <p
                   className={`w-5 h-5 ml-2 text-xl ${
                     isOpen ? "-mr-0" : "mr-0"
                   }`}
                   stroke="currentColor"
                 >
                   <MdOutlineKeyboardArrowDown />
                 </p>
               </button>
               {isOpen && <Logout setIsOpen={setIsOpen} />}
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>}
      
    </>
  );
};
