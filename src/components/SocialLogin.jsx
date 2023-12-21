import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const SocialLogin = () => {
    //TODO: login with google, github, facebook have to implement

  return (
    <div className="flex gap-4 justify-center">
      <FaGoogle onClick={() => alert("hello")} className="text-2xl" />
      <FaGithub onClick={() => alert("hello")} className="text-2xl" />
      <FaFacebook onClick={() => alert("hello")} className="text-2xl" />
    </div>
  );
}

export default SocialLogin;
