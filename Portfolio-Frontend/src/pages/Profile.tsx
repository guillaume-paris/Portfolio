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

  const openLoginModal = () => setIsLoginModalOpen(true);
  const openRegisterModal = () => setIsRegisterModalOpen(true);

  const onLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
  }

  const closeLoginModal = () => setIsLoginModalOpen(false);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
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
            <button onClick={onLogout} className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
              <span>
                  Log out
              </span>
            </button>
            
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