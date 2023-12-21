import Banner from "./Banner";
import Navbar from "./Navbar";


const Header = () => {
    const style = {
        backgroundImage: "url(https://i.ibb.co/HN4RX7T/pexels-anna-nekrashevich-6204266.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
  return (
    <div style={style} className="min-h-screen">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default Header;
