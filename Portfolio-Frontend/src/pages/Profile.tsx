import { useContext, useEffect, useState } from "react";

import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Card from "../components/Card";

import { AuthService } from "../services/AuthService";

import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button";

function Profile() {

  const authService = new AuthService();
  const { isAuthenticated } = useContext(AuthContext);
  const { setIsAuthenticated } = useContext(AuthContext);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    sexe: "",
    age: 0,
    city: "",
    country: "",
    nationality: "",
    description: "",
    profilePicture: "",
  });

  const openLoginModal = () => setIsLoginModalOpen(true);
  const openRegisterModal = () => setIsRegisterModalOpen(true);

  const onLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
  }

  const closeLoginModal = () => setIsLoginModalOpen(false);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  useEffect(() => {
    const username = authService.getCurrentUser().name;
    setUserInfo({ ...userInfo, username: username, email: "testBrut@gmail.com", age: 21, sexe: "casserole", city: "Colorado", country: "France", nationality: "French", description: "Hi it's a test" });
  }, []);


  return (
    <>
      <div className="flex items-center justify-center h-screen pt-16">
        <Card className="flex flex-col justify-center items-center">
          {!isAuthenticated && <>
            <span className="text-white p-10">
              Hey, you are not logged in !
            </span>
            <Button type="button" onClick={openLoginModal} color="secondary">
              <span> Sign in</span>
            </Button>
            <hr className="h-px w-3/5 bg-white text-white my-5"></hr>
            <Button type="button" onClick={openRegisterModal} color="secondary" className="mb-10">
              <span> Sign up</span>
            </Button>
          </>}
          {isAuthenticated && <>
            <div className="flex flex-row m-5">
              <img src={require("../assets/default_user.jpg")} alt="profile" className="rounded-full w-1/4 h-1/4"></img>
              <div className="flex flex-col justify-center items-start p-10 gap-3 text-white text-xl">
                <span>
                  Username : <span className="font-bold">{userInfo.username}</span> 
                </span>
                <span>
                  Email : <span className="font-bold">{userInfo.email}</span>
                </span>
                <span>
                  Sexe : <span className="font-bold">{userInfo.sexe}</span>
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between py-5 px-12 w-full">
              <div className="flex flex-col text-white text-xl gap-3">
                <span>
                  Age : <span className="font-bold">{userInfo.age}</span> 
                </span>
                <span>
                  City : <span className="font-bold">{userInfo.city}</span> 
                </span>
              </div>
              <div className="flex flex-col text-white text-xl gap-3">
                <span>
                  Country : <span className="font-bold">{userInfo.country}</span> 
                </span>
                <span>
                  Nationality : <span className="font-bold">{userInfo.nationality}</span> 
                </span>
              </div>
            </div>
            <div className="flex flex-col self-start text-lg gap-3 py-4 px-12 w-full">
              <label className="mb-2 text-white text-lg font-medium text-gray-900">
                Description :
                <textarea
                  id="description"
                  rows={2}
                  className="mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  value={userInfo.description}/>
              </label>
            </div>

            <Button type="button" onClick={onLogout} color="secondary" className="mb-5 self-end m-5">
              Log out
            </Button>
          </>}
        </Card>
      </div>
      
      <Modal isOpen={isLoginModalOpen} closeModal={closeLoginModal} title="Sign in">
        <LoginForm closeModal={closeLoginModal}></LoginForm>
      </Modal>

      <Modal isOpen={isRegisterModalOpen} closeModal={closeRegisterModal} title="Sign up">
        <RegisterForm closeModal={closeRegisterModal}></RegisterForm>
      </Modal>
    </>
  );
}

export default Profile;