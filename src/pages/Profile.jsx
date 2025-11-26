import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

const Profile = () => {
  const { setUser,user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);


  

  const handleOpenForm = () => {
    setOpen(!open);
    console.log(open);
  };

  const handleUpdate = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    
    const photo = e.target.photo.value;

    updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({...user,displayName: name,
          photoURL: photo});
           
          })
          .catch((error) => {
            console.log(`${error} occured`);
          });
        toast.success("Profile Updated Successfully.....!!!");

        
    
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center mt-5  gap-4">
      <title>My Profile</title>
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user?.photoURL} referrerPolicy="no-referrer" />
          
        </div>
      </div>

      <h1 className="text-xl font-semibold">{user?.displayName}</h1>
      <h1 className="text-gray-600">{user?.email}</h1>

      <button
        onClick={handleOpenForm}
        type="button"
        className="btn btn-neutral mt-4"
      >
        Update Profile
      </button>

      {open && (
        <form  onSubmit={handleUpdate} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Photo Url"
              defaultValue={user?.photoURL}
              name="photo"
              
            />

            <button type="submit" className="btn btn-error mt-4">
              Update
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default Profile;
