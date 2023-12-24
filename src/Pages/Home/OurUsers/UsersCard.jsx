import PropTypes from "prop-types";

const UsersCard = ({ image, title }) => {
  return (
    <div className="p-3 shadow-lg rounded-lg">
      <img src={image} alt="" />
      <h3 className="text-2xl font-bold mt-3">{title}</h3>
    </div>
  );
};

UsersCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.object,
};

export default UsersCard;
