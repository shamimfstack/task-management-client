import Banner from "./Banner";
import Navbar from "./Navbar";


const Header = () => {
    const style = {
        backgroundImage: "url(https://i.ibb.co/vLB5HHG/pexels-katerina-holmes-5905445.jpg)"
    }
  return (
    <div style={style} className="min-h-screen">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default Header;
