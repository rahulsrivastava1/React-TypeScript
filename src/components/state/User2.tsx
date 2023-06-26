import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User2 = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Rahul",
      email: "rahul@example.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <p>User name is : {user?.name}</p>
      <p>User email is : {user?.email}</p>
    </div>
  );
};

export default User2;
