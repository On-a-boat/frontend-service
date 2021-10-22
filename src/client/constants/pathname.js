export const menuItems = [
  { name: "Home", to: "/", icon: "", subMenuItems: [] },
  { name: "Users", to: "/users", icon: "", subMenuItems: [] },
  { name: "Groups", to: "/groups", icon: "icons/groups.svg", subMenuItems: [] },
  {
    name: "Statistics",
    to: "#",
    icon: "",
    subMenuItems: [
      { name: "Users ", to: "/statistics/users" },
      { name: "Email", to: "/statistics/email" },
    ],
  },
  {
    name: "Settings",
    to: "/settings",
    icon: "icons/settings.svg",
    subMenuItems: [],
  },
  {
    name: "Logout",
    to: "/login",
    icon: "icons/settings.svg",
    subMenuItems: [],
  },
];

export const pathToName = {
  "/": "User Details",
  "/groups": "Groups",
  "/email": "Email",
  "/statistics": "Statisitics",
  "/settings": "Settings",
};
