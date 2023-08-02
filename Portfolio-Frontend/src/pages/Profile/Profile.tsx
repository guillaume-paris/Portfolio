import { useContext } from "react";

import Card from "../../components/Card";

import { AuthContext } from "../../context/AuthContext";
import Unauthenticated from "./Unauthenticated/Unauthenticated";
import Authenticated from "./Authenticated/Authenticated";

function Profile() {

  const { isAuthenticated } = useContext(AuthContext);

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