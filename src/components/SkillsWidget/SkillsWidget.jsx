import './SkillsWidget.css';
import PropTypes from 'prop-types';

const SkillsWidget = ({ title, content, skills }) => {
  return (
    <section data-testid="skillsWidget" className="skills-widget">
      <h2 data-testid="skillsWidgetTitle">{title}</h2>
      <p data-testid="skillsWidgetContent">{content}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} data-testid={`skillsWidgetItem${index}`}>
            <div className="skills-item">
              <img data-testid={`skillsWidgetItemLogo${index}`} src={skill.icon} alt={`Item ${index} Name Icon`} />
              <div className="skills-item-content">
                <h3 data-testid={`skillsWidgetItemName${index}`}>{skill.name}</h3>
                <div className="skills-item-proficiency">
                  <div
                    data-testid={`skillsWidgetItemProficiency${index}`}
                    className="proficiency-bar"
                    style={{ width: skill.proficiency + '%' }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

SkillsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

SkillsWidget.defaultProps = {
  skills: [],
};
export default SkillsWidget;
