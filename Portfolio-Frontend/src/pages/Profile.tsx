import { Link } from "react-router-dom";
import { useState } from "react";

import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import Card from "../components/Card";
function Profile() {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);

  const closeLoginModal = () => setIsLoginModalOpen(false);

    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <Card className="flex flex-col justify-center items-center">
            <button onClick={openLoginModal} className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
              <span>
                  Sign in
              </span>
            </button>
            <hr></hr>
            <button className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
              <span>
                  Sign up
              </span>
            </button>
          </Card>
        </div>
        <Modal isOpen={isLoginModalOpen} closeModal={closeLoginModal} title="Sign in">
          <LoginForm closeModal={closeLoginModal}></LoginForm>
        </Modal>
      </>
  );
}

export default Profile;