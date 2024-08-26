import { BiHomeAlt } from "react-icons/bi";
import { GoPeople, GoPerson } from "react-icons/go";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoMapOutline } from "react-icons/io5";

export const GNB = [
  {
    title: "시설",
    path: "/gyms",
    icon: <HiOutlineBuildingOffice />,
  },
  {
    title: "트레이너",
    path: "/trainers",
    icon: <GoPeople />,
  },
  {
    title: "홈",
    path: "/",
    icon: <BiHomeAlt />,
  },
  {
    title: "지도",
    path: "/map",
    icon: <IoMapOutline />,
  },
  {
    title: "마이",
    path: "/my",
    icon: <GoPerson />,
  },
];
