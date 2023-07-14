import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function Unauthenticated() {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const openRegisterModal = () => setIsRegisterModalOpen(true);

  const closeLoginModal = () => setIsLoginModalOpen(false);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  return (
    <>
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

      <Modal isOpen={isLoginModalOpen} closeModal={closeLoginModal} title="Sign in">
        <LoginForm closeModal={closeLoginModal}></LoginForm>
      </Modal>

      <Modal isOpen={isRegisterModalOpen} closeModal={closeRegisterModal} title="Sign up">
        <RegisterForm closeModal={closeRegisterModal}></RegisterForm>
      </Modal>
    </>
  )
}

export default Unauthenticated;