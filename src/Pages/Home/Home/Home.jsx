import { Helmet } from "react-helmet-async";
import OurUsers from "../OurUsers/OurUsers";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>homepage</title>
      </Helmet>
      <OurUsers></OurUsers>
    </div>
  );
}

export default Home;
