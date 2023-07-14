import { useContext, useEffect, useState } from "react";

import Card from "../../components/Card";

import { AuthService } from "../../services/AuthService";

import { AuthContext } from "../../context/AuthContext";
import Unauthenticated from "./Unauthenticated/Unauthenticated";
import Authenticated from "./Authenticated/Authenticated";

function Profile() {

  const authService = new AuthService();
  const { isAuthenticated } = useContext(AuthContext);
  const { setIsAuthenticated } = useContext(AuthContext);

  return (
    <>
      <div className="flex items-center justify-center h-screen pt-16">
        <Card className="flex flex-col justify-center items-center">
          {!isAuthenticated && <Unauthenticated></Unauthenticated>}
          {isAuthenticated && <Authenticated></Authenticated>}
        </Card>
      </div>

      
    </>
  );
}

export default Profile;