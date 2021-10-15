import { createContext } from "react";

// Used for Context in Authentication for RootSPA, just so that autofill works fine
export const UserContext = createContext({
  isLoggedIn: false,
  token: null,
  name: null,
  login: () => {},
  logout: () => {},
});
