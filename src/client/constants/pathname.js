export const menuItems = [
  { name: "CRM", to: "/", icon: "", subMenuItems: [] },
  { name: "Groups", to: "/groups", icon: "icons/groups.svg", subMenuItems: [] },
  { name: "Email", to: "/email", icon: "icons/email.svg", subMenuItems: [] },
  {
    name: "Statistics", to: '#', icon: "", subMenuItems: [
      { name: 'Users ', to: '/statistics/users' },
      { name: 'Email', to: '/statistics/email' },

    ]
  },
  { name: "Settings", to: "/settings", icon: "icons/settings.svg", subMenuItems: [] },
];

export const pathToName = {
  "/": "CRM",
  "/groups": "Groups",
  "/email": "Email",
  "/statistics": "Statisitics",
  "/settings": "Settings",
};
