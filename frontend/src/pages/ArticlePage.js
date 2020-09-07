import React from 'react';
import dummyArticles from '../dummy-articles';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = dummyArticles.find(dummyArticle => dummyArticle.name === name);

    if(!article) return <h1>Article does not exist</h1>

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