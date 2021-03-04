/**
 * React app side menu structure
 */
import reactIcon from "../assets/images/react-grey.svg";
import reactActiveIcon from "../assets/images/react-green.svg";
import homeIcon from "../assets/images/home.svg";
import homeActiveIcon from "../assets/images/home-green.svg";

const appMenu = [
  {
    title: "React App",
    path: "/community-admin",
    icon: reactIcon,
    activeIcon: reactActiveIcon,
  },
  {
    title: "Auth Demo",
    path: "/community-admin/auth",
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  },
  {
    title: "No Sidebar Demo",
    path: "/community-admin/no-sidebar",
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  },
];

export default appMenu;
