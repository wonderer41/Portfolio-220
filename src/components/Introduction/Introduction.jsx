import './Introduction.css';
import Image from 'next/image'
import PropTypes from 'prop-types';

const Introduction = ({title, content, socialLinks}) => {
    return (
        <div>
            <Image src='/Introduction/profile.jpg' width={200} height={200} alt='Profile picture'/>
            <h1>{title}</h1>
            <p>{content}</p>
            <ul>
                {socialLinks.map((socialLink, index) => (
                    <li key={index}>
                        <a href={socialLink.link} target='_blank' rel="noopener noreferrer">
                            <Image src={socialLink.icon} width={24} height={24} alt='Social icon' />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Introduction.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    socialLinks: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

Introduction.defaultProps = {
    socialLinks: [],
};

export default Introduction;