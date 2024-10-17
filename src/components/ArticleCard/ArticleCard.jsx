import './ArticleCard.css';
import PropTypes from 'prop-types';

  const ArticleCard = ({articleList = []}) => {
  return (
  <div className="article-card-container">
    <ul>
    {articleList?.map((article, index) => (
      <li key={index} className='p-2'>
        <article data-testid={`articleCard${index}`} className="article-card">
          <div className="article-card-header">
            <time data-testid={`articleCardDate${index}`}>{article.date}</time>
            <h2 data-testid={`articleCardTitle${index}`}>{article.title}</h2>
          </div>
          <p data-testid={`articleCardContent${index}`}>{article.content}</p>
          <a data-testid={`articleCardLink${index}`} href={article.link || '#'}>
            Read article
          </a>
        </article>
      </li>
      ))}
    </ul>
  </div>
  );
};

ArticleCard.propTypes = {
  articleList: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default ArticleCard;
