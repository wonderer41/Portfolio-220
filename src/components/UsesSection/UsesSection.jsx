import PropTypes from 'prop-types';
import UseCard from '../UseCard/UsesCard.jsx';

const UsesSection = ({ groupName, items = [] }) => {
  return (
    <section className="flex flex-col p-[15px]">
        <div className="flex flex-col lg:flex-row justify-between pl-[24px] border-l-2">
          <h2>{groupName}</h2>
          <div className="w-[738px] flex flex-col gap-y-[32px]">
            {items.map((subitem, subIndex) => (
              <UseCard key={subIndex} title={subitem.title} description={subitem.description} />
            ))}
          </div>
        </div>
    </section>
  );
};

UsesSection.propTypes = {
  groupName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

UsesSection.defaultProps = {
  items: [],
};

export default UsesSection;
