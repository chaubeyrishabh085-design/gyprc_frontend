import { FaHome, FaUser ,FaUserCheck} from "react-icons/fa";
import { FcLeave } from "react-icons/fc";
import { GrCompliance } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { MdOutlineLogout } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { AiOutlineFileText } from "react-icons/ai";

export const routes = [
  {
    path: "/admin",
    name: "DashBoard",
    icon: <FaHome />,
  },
  {
    path: "/admin/attendence-view",
    name: "View Attendance",
    icon: <FaUser />,
  },
  {
    path: "/admin/update-attendance",
    name: "Update Attendance",
    icon: <FaUser />,
  },
  {
    path: "/admin/leave",
    name: "Leave Request",
    icon: <FcLeave />,
  },
  {
    path: "/admin/assets",
    name: "Asstes",
    icon: <ImProfile />,
  },

  // {
  //   path: "/admin/salary-slip",
  //   name: "Generate Salary Slip",
  //   icon: <GrCompliance />,
  // },

  {
    path: "/admin/employee-registration",
    name: "Register Employee",
    icon: <IoMdPeople />,
  },
 
  {
    path: "/admin/complaints",
    name: "Complaints",
    icon: <GrCompliance />,
  },
  {
    path: "/admin/employees",
    name: "Employee List",
    icon: <GrCompliance />,
  },
  {
    path: "/admin/ex-employees",
    name: "Ex Employees",
    icon: <GrCompliance />,
  },
  {
    path: "/admin/upload",
    name: "Upload Excel",
    icon: <ImProfile />,
  },
  {
    path: "/admin/holiday",
    name: "Holiday List",
    icon: <GrCompliance />,
  },
  {
    path: "/admin/consultancy-users",
    name: "Consultancy Users",
    icon: <FaUserCheck />,
  },
  {
    path: "/admin/resume-data",
    name: "Resume Data",
    icon: <FaUserCheck />,
  },
  {
    path: "/admin/letters",
    name: "Letters",
    icon: <AiOutlineFileText />,
  },
  {
    path: "/admin/new-letters",
    name: "New Letters",
    icon: <AiOutlineFileText />,
  },
];

export default routes;
