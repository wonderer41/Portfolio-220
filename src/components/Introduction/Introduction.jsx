import './Introduction.css';
import Image from 'next/image'
import PropTypes from 'prop-types';
import socialLinks from '../Data';

const Introduction = ({title, content, socialLinks = []}) => {
    return (
        <div className='introduction' width={672} height={384}>
            <Image src='/Introduction/profile.jpg' width={60} height={60} className="rounded-full border-2 border-inherit shadow-lg m-2" alt='Profile picture'/>
            
            <h1>{title}</h1>
            <p>{content}</p>
            <ul className='flex flex-row gap-6'>
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

export default Introduction;