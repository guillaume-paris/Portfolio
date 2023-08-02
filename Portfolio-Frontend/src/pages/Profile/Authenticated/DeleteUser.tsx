import { useContext } from "react";
import Button from "../../../components/Button";
import { AuthContext } from "../../../context/AuthContext";
import { UserService } from "../../../services/UserService";

export interface DeleteUserProps {
  closeModal: () => void;
}

function DeleteUser({ closeModal }: DeleteUserProps) {

  const userService = new UserService();
  const { setIsAuthenticated } = useContext(AuthContext);

  const onDelete = async () => {

    try {
      const response = await userService.deleteUser();
      if (response.status === 200) {
        setIsAuthenticated(false);
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  }

  const onCancel = () => {
    closeModal();
  }

  return (<>
      <div className="flex flex-col items-center">
        <span className="text-black text-2xl font-regular my-5">Are you sure ?</span>
        <div className="flex flex-row w-full justify-around my-5">
          <Button color="red" type="button" onClick={onCancel} className="px-8">
            No
          </Button>
          <Button color="green" type="button" onClick={onDelete} className="px-8">
            Yes
          </Button>
        </div>
      </div>
    
  </>);
}

export default DeleteUser;