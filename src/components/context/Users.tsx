import { useContext } from "react";
import { UserContext } from "./UserContext";

const Users = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "Rahul",
      email: "rahul@example.com",
    });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is : {userContext.user?.name}</div>
      <div>User email is : {userContext.user?.email}</div>
    </>
  );
};

export default Users;
