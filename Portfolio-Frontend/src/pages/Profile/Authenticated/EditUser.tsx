import { useState } from "react";
import Button from "../../../components/Button";
import { UserService } from "../../../services/UserService";
import Input from "../../../components/Input";
import Textarea from "../../../components/Textarea";
import { AuthService } from "../../../services/AuthService";

type userInfo = {
  name: string;
  gender: string;
  age: number;
  city: string;
  country: string;
  nationality: string;
  description: string;
};

export interface EditUserProps {
  closeModal: () => void;
  userInfoSeed: userInfo;
  refreshUserInfo: () => void;
}

function EditUser({ closeModal, userInfoSeed, refreshUserInfo }: EditUserProps) {

  const userService = new UserService();
  const authService = new AuthService();

  const [userInfo, setUserInfo] = useState<userInfo>(userInfoSeed);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await userService.editUser(userInfo);
      if (response.status === 200) {
        authService.editUserName(userInfo.name);
        refreshUserInfo();
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  }

  const onCancel = () => {
    closeModal();
  }

  const handleChange = (key: keyof userInfo) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserInfo(prev => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <>
      <form onSubmit={onSubmit} className="grid mx-14 gap-x-14 gap-y-3 grid-cols-2">
        <Input value={userInfo.name} onChange={handleChange('name')} label="Username :" className="w-full" placeHolder="Enter a username"/>
        <Input value={userInfo.gender} onChange={handleChange('gender')} label="Gender :" className="w-full" placeHolder="Enter your gender"/>
        <Input value={userInfo.country} onChange={handleChange('country')} label="Country :" className="w-full" placeHolder="Enter a country"/>
        <Input value={userInfo.age} onChange={handleChange('age')} label="Age :" type="number" className="w-full" placeHolder="Enter your age"/>
        <Input value={userInfo.city} onChange={handleChange('city')} label="City :" className="w-full" placeHolder="Enter a city"/>
        <Input value={userInfo.nationality} onChange={handleChange('nationality')} label="Nationality :" className="w-full" placeHolder="Enter your nationality"/>
        <Textarea value={userInfo.description} onChange={handleChange('description')} label="Description :" placeHolder="Enter your description" className="col-span-2"/>
        <div className="col-span-2 flex flex-row justify-around w-full mb-5 mt-8">
          <Button color="red" type="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button color="green" type="submit">
            Save
          </Button>
        </div>
      </form>
    </>
  );
}

export default EditUser;