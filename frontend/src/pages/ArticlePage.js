import React from 'react';
import dummyArticles from '../dummy-articles';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = dummyArticles.find(dummyArticle => dummyArticle.name === name);

    if(!article) return <NotFoundPage />

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
        </>
    )
}

export default ArticlePage;