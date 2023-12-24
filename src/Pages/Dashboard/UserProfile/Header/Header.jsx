import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <div>
      <h3 className="flex justify-center text-xl font-bold bg-green-800 p-2 text-white">{title} <span className="ml-6 text-white"></span></h3>
    </div>
  );
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;
