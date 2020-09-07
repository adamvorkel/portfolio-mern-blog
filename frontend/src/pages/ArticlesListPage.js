import React from 'react';
import { Link } from 'react-router-dom';
import dummyArticles from '../dummy-articles';

const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        {dummyArticles.map((article, key) => (
            <Link key={key} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
    </>
);

export default ArticlesListPage;