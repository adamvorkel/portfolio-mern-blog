import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (

            <Link className="article" key={key} to={`/article/${article.name}`}>
                <div className="article-content">
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                    <time datetime="">6:00 pm UTC - September 7, 2020</time>
                </div>
            </Link>

    ))}
    </>
);

export default ArticlesList;

