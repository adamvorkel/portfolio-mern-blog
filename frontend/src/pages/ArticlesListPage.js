import React from 'react';


import ArticlesList from '../components/ArticlesList';
import dummyArticles from '../dummy-articles';

const ArticlesListPage = () => (
    <div className="articles-list container">
        <h1>Articles</h1>
        <ArticlesList articles={dummyArticles} />
    </div>
);

export default ArticlesListPage;