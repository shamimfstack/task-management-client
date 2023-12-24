import developerImg from "/images/developer.jpg";
import corporateImg from "/images/corporate.jpg";
import bankImg from "/images/bank.jpg";
import UsersCard from "./UsersCard";

const benefitedPeople = ["Professional", "Students", "Freelances", "Entrepreneurs", "Work/Project Teams", "Manage", "Team Leaders", "Remote Teams", "Digital Nomads", "Designers and Creatives"]

const OurUsers = () => {
  return (
    <div className="py-24">
      <div>
        <h2
          data-aos="fade-up"
          className="text-center text-2xl md:text-3xl font-bold"
        >
          Our Users
        </h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <UsersCard image={developerImg} title={"Developers"} />
          <UsersCard image={corporateImg} title={"Corporate"} />
          <UsersCard image={bankImg} title={"Bankers"} />
        </div>
      </div>
      <div className="py-12">
        <h3 className="text-3xl font-bold text-center">People Should use Our Platform</h3>
        <div className="w-full md:w-1/2 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2">
            {benefitedPeople.map(person => <li className="text-xl font-semibold" key={person.id}>{person}</li>)}
        </div>
      </div>
    </div>
  );
};

export default OurUsers;
