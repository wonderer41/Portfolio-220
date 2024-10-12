import './Navbar.css';
import PropTypes from 'prop-types';

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Navbar({ options = null }) {
  return (
    <nav data-testid="nav" className={'navbar'}>
      <ul data-testid="ul">
        {options?.map((optionNav, index) => (
            <li key={index} data-testid={`li${index}`}>
              <a data-testid={`a${index}`} className="link" href={optionNav.path}>
                {optionNav.label}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Navbar;
