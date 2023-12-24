import { FaGoogle, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn } = useAuth();
  const navigate = useNavigate();
    //TODO: login with google, github, facebook have to implement

    const handleGoogleSignIn = () => {
      googleSignIn()
      .then(() => {
        navigate("/dashboard")
      })
    }

    const handleGithubSingIn = () => {
      githubSignIn()
      .then(() => {
        navigate("/dashboard");
      })
    }

  return (
    <div className="flex gap-4 justify-center">
      <FaGoogle onClick={handleGoogleSignIn} className="text-2xl" />
      <FaGithub onClick={handleGithubSingIn} className="text-2xl" />
      <FaFacebook onClick={() => alert("hello")} className="text-2xl" />
      <FaTwitter onClick={() => alert("hello")} className="text-2xl" />
    </div>
  );
}

export default SocialLogin;
