import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col justify-center items-center">
      <h2 data-aos="fade-up" className="text-3xl font-bold">Task Management Platform</h2>
      <p>Make an excellent habit completing task everyday</p>
      <Link to="/login">
        <button type="button" className="btn btn-info mt-5">
          Let's Explore
        </button>
      </Link>
    </div>
  );
};

export default Banner;
