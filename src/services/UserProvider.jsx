import { createContext, useContext, useState } from "react";

const userContext = createContext();
function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "", email: "" });

  const login = (name, email) => {
    setUser({name, email});
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
  };

  const logout = (name, email) => {
    setUser({ name: "", email: "" });
    localStorage.removeItem("userName", name);
    localStorage.removeItem("userEmail", email);
  };

  return (
    <userContext.Provider value={{ user, login, logout }}>
      {children}
    </userContext.Provider>
  );
}

export const useUser = () => useContext(userContext);

export default UserProvider;
