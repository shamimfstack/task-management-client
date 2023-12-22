
import useAuth from "../hooks/useAuth";

const UserProfile = () => {
    const { user } = useAuth();
  return (
    <div>
      <img className="w-1/2 mx-auto rounded-full" src={user?.photoURL} alt="" />
      <h2 className="text-center text-xl text-white font-demibold">
        Shamim Ahammad
      </h2>
    </div>
  );
};

export default UserProfile;
