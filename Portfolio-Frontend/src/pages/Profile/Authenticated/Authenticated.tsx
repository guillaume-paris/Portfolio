import { useCallback, useContext, useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import { AuthService } from "../../../services/AuthService";
import { AuthContext } from "../../../context/AuthContext";
import Button from "../../../components/Button";
import DeleteUser from "./DeleteUser";
import { UserService } from "../../../services/UserService";
import Spinner from "../../../components/Spinner";
import EditUser from "./EditUser";

const userService = new UserService();

function Authenticated() {
  const authService = new AuthService();
  const { setIsAuthenticated } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    gender: "",
    age: 0,
    city: "",
    country: "",
    nationality: "",
    description: "",
    profilePicture: "",
  });

  const openDeleteUserModal = () => setIsDeleteUserModalOpen(true);
  const openEditUserModal = () => setIsEditUserModalOpen(true);
  const closeDeleteUserModal = () => setIsDeleteUserModalOpen(false);
  const closeEditUserModal = () => setIsEditUserModalOpen(false);

  const onLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
  }

  const onDelete = () => {
    openDeleteUserModal();
  }

  const onEdit = () => {
    openEditUserModal();
  }

  const getUserInfo = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await userService.getUser();
      if (response.status === 200) {
        setUserInfo(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshUserInfo = () => {
    getUserInfo();
  }

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  
  return (
    <>
      {isLoading ? <Spinner text="Loading ..."></Spinner> :
        <>
          <div className="flex flex-col md:flex-row m-5 pt-24 sm:pt-0">
            <img src={require("../../../assets/default_user.jpg")} alt="profile" width={200} height={150} className="rounded-full"></img>
            <div className="hidden md:flex md:flex-col justify-center md:items-start p-10 gap-3 text-white text-xl">
              <span className="flex flex-col sm:flex-row whitespace-pre">Username : <span className="font-bold">{userInfo.name ?? "N/A"}</span></span>
              <span className="flex flex-col sm:flex-row whitespace-pre">Email : <span className="font-bold">{userInfo.email ?? "N/A"}</span></span>
              <span className="flex flex-col sm:flex-row whitespace-pre">Gender : <span className="font-bold">{userInfo.gender ?? "N/A"}</span></span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-white text-xl w-full px-2">
            <span className="flex flex-col sm:flex-row whitespace-pre">Username : <span className="font-bold">{userInfo.name ?? "N/A"}</span></span>
            <span className="flex flex-col sm:flex-row whitespace-pre md:hidden">Email : <span className="font-bold">{userInfo.email ?? "N/A"}</span></span>
            <span className="flex flex-col sm:flex-row whitespace-pre md:hidden">Gender : <span className="font-bold">{userInfo.gender ?? "N/A"}</span></span>
            <span className="flex flex-col sm:flex-row whitespace-pre md:hidden">Age : <span className="font-bold">{userInfo.age ?? "N/A"}</span></span>
            <span className="flex flex-col sm:flex-row whitespace-pre">City : <span className="font-bold">{userInfo.city ?? "N/A"}</span></span>
            <span className="flex flex-col sm:flex-row whitespace-pre">Country : <span className="font-bold">{userInfo.country ?? "N/A"}</span></span>
            <span className="flex flex-col sm:flex-row whitespace-pre">Nationality : <span className="font-bold">{userInfo.nationality ?? "N/A"}</span></span>
            <span className="flex flex-col col-span-2 gap-2">Description : <span className="font-regular">{userInfo.description ?? "N/A"}</span></span>
          </div>
          <div className="flex w-full flex-col md:flex-row justify-between mb-2 m-5 gap-4">
            <Button type="button" onClick={onDelete} color="red" className="">
              Delete account
            </Button>
            <Button type="button" onClick={onEdit} color="blue" className="">
              Edit info
            </Button>
            <Button type="button" onClick={onLogout} color="secondary" className="">
              Log out
            </Button>
          </div>

          <Modal isOpen={isDeleteUserModalOpen} closeModal={closeDeleteUserModal} title="Delete you account">
            <DeleteUser closeModal={closeDeleteUserModal}/>
          </Modal>

          <Modal isOpen={isEditUserModalOpen} closeModal={closeEditUserModal} title="Edit your informations">
            <EditUser closeModal={closeEditUserModal} userInfoSeed={userInfo} refreshUserInfo={refreshUserInfo}/>
          </Modal>
        </>
      }
    </>
  )
}

export default Authenticated;