import PropTypes from 'prop-types';
import UseCard from '../UseCard/UsesCard.jsx';

const UsesSection = ({ items }) => {
  return (
    <section className="flex flex-col p-{32px}">
      <div className="flex flex-col gap-y-64">
        {items.map((i, index) => (
          <div key={index} className="flex flex-row justify-start gap-x-32 pl-{16px} border-l-2">
            <h2>{i.groupName}</h2>
            <div className="flex flex-col gap-y-32">
              {i.items.map((subitem, subIndex) => (
                <UseCard key={subIndex} title={subitem.title} description={subitem.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

UsesSection.propTypes = {
  usesItems: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};

UsesSection.defaultProps = {
  items: [],
};

export default UsesSection;
