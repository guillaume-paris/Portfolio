import { useContext, useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import { AuthService } from "../../../services/AuthService";
import { AuthContext } from "../../../context/AuthContext";
import Button from "../../../components/Button";
import DeleteModal from "./DeleteModal";

function Authenticated() {

  const authService = new AuthService();
  const { setIsAuthenticated } = useContext(AuthContext);

  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    gender: "",
    age: 0,
    city: "",
    country: "",
    nationality: "",
    description: "",
    profilePicture: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  
  const openDeleteUserModal = () => setIsDeleteUserModalOpen(true);

  const onLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
  }

  const onDelete = () => {
    openDeleteUserModal();
  }

  const onSave = () => {
  }

  
  const closeDeleteUserModal = () => {
    setIsDeleteUserModalOpen(false);
  }

  useEffect(() => {
    const username = "test";
    setUserInfo({ ...userInfo, username: username, email: "testBrut@gmail.com", age: 21, gender: "casserole", city: "Colorado", country: "France", nationality: "French", description: "Hi it's a test" });
  }, []);

  
  return (
    <>
      <div className="flex flex-row m-5">
        <img src={require("../../../assets/default_user.jpg")} alt="profile" className="rounded-full w-1/4 h-1/4"></img>
        <div className="flex flex-col justify-center items-start p-10 gap-3 text-white text-xl">
          <span>
            Username : <span className="font-bold">{userInfo.username}</span> 
          </span>
          <span>
            Email : <span className="font-bold">{userInfo.email}</span>
          </span>
          <span>
            Gender : <span className="font-bold">{userInfo.gender}</span>
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
      <div className="flex w-full justify-between">
        <Button type="button" onClick={onDelete} color="red" className="mb-5 m-5">
          Delete account
        </Button>
        {isEditing && <Button type="button" onClick={onSave} color="blue" className="mb-5 m-5">
          Save changes
        </Button>}
        <Button type="button" onClick={onLogout} color="secondary" className="mb-5 m-5">
          Log out
        </Button>
      </div>

      <Modal isOpen={isDeleteUserModalOpen} closeModal={closeDeleteUserModal} title="Delete you account">
        <DeleteModal closeModal={closeDeleteUserModal}/>
      </Modal>
    </>
  )
}

export default Authenticated;