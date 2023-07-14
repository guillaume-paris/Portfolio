import { useContext, useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import { AuthService } from "../../../services/AuthService";
import { AuthContext } from "../../../context/AuthContext";
import Button from "../../../components/Button";
import DeleteUser from "./DeleteUser";
import { UserService } from "../../../services/UserService";
import Spinner from "../../../components/Spinner";
import EditUser from "./EditUser";

function Authenticated() {

  const authService = new AuthService();
  const userService = new UserService();
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

  const getUserInfo = async () => {
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
  }

  const refreshUserInfo = () => {
    getUserInfo();
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  
  return (
    <>
      {isLoading ? <Spinner text="Loading ..."></Spinner> :
        <>
          <div className="flex flex-row m-5">
            <img src={require("../../../assets/default_user.jpg")} alt="profile" className="rounded-full w-1/4 h-1/4"></img>
            <div className="flex flex-col justify-center items-start p-10 gap-3 text-white text-xl">
              
              <span className="flex flex-row gap-3 w-full whitespace-nowrap">
                Username : <span className="font-bold">{userInfo.name ?? "N/A"}</span>
              </span>
              <span>
                Email : <span className="font-bold">{userInfo.email ?? "N/A"}</span>
              </span>
              <span>
                Gender : <span className="font-bold">{userInfo.gender ?? "N/A"}</span>
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-between py-5 px-12 w-full">
            <div className="flex flex-col text-white text-xl gap-3">
              <span>
                Age : <span className="font-bold">{userInfo.age ?? "N/A"}</span> 
              </span>
              <span>
                City : <span className="font-bold">{userInfo.city ?? "N/A"}</span> 
              </span>
            </div>
            <div className="flex flex-col text-white text-xl gap-3">
              <span>
                Country : <span className="font-bold">{userInfo.country ?? "N/A"}</span> 
              </span>
              <span>
                Nationality : <span className="font-bold">{userInfo.nationality ?? "N/A"}</span> 
              </span>
            </div>
          </div>
          <div className="flex flex-col self-start text-white text-xl gap-3 py-4 px-12 w-full">
            <span>
              Description :
            </span>
            <span className="font-regular">{userInfo.description ?? "N/A"}</span> 
          </div>
          <div className="flex w-full justify-between">
            <Button type="button" onClick={onDelete} color="red" className="mb-5 m-5">
              Delete account
            </Button>
            <Button type="button" onClick={onEdit} color="blue" className="mb-5 m-5">
              Edit info
            </Button>
            <Button type="button" onClick={onLogout} color="secondary" className="mb-5 m-5">
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