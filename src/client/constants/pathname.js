import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ArrowLeft from "@material-ui/icons/ArrowBack";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";

export const menuItems = [
  { name: "Home", to: "/", icon: HomeIcon, subMenuItems: [] },
  { name: "Users", to: "/users", icon: PersonIcon, subMenuItems: [] },
  { name: "Groups", to: "/groups", icon: GroupIcon, subMenuItems: [] },
  {
    name: "Statistics",
    to: "#",
    icon: EqualizerIcon,
    subMenuItems: [
      { name: "Users ", to: "/statistics/users" },
      { name: "Email", to: "/statistics/email" },
    ],
  },
  //add a new menu item here that will be used to display the profile page of the user
  { name: "Profile", to: "/profile", icon: PersonIcon, subMenuItems: [] },
  {
    name: "Settings",
    to: "/settings",
    icon: SettingsInputComponentIcon,
    subMenuItems: [],
  },
  {
    name: "Logout",
    to: "/login",
    icon: ArrowLeft,
    subMenuItems: [],
  },
];
