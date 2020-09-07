import React from 'react';


import ArticlesList from '../components/ArticlesList';
import dummyArticles from '../dummy-articles';

const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticlesList articles={dummyArticles} />
    </>
);

export default ArticlesListPage;