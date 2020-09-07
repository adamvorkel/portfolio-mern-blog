import React from 'react';
import dummyArticles from '../dummy-articles';
import ArticlesList from '../components/ArticlesList';

const HomePage = () => (
    <>
        <section id="featured-articles">
            <div className="content container">
                <div className="primary">
                    <div className="article">
                        <span className="article-tag">Some short tagline</span>
                        <h2 className="article-headline">This is an attention-catching headline for our article</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu vehicula nunc, id ornare mi. Suspendisse vel purus eget nisl mattis volutpat ut sed elit.</p>
                    </div>
                </div>
                <div className="secondary">
                    <div className="article">
                        <span className="article-tag">Tech tips</span>
                        <h2 className="article-headline">Your browser cookies may be tastier than you think</h2>
                    </div>
                    <div className="article">
                        <span className="article-tag">devops</span>
                        <h2 className="article-headline">How to setup your local development environment with docker</h2>
                    </div>
                    <div className="article">
                        <span className="article-tag">Tech lifestyle</span>
                        <h2 className="article-headline">Is your cat still using internet explorer?</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="articles-list">
            <div className="content container">
                <div className="hot">
                    <h2>What's hot</h2>
                    <ArticlesList articles={dummyArticles} />
                </div>
                <div className="new">
                    <h2>What's new</h2>
                    <ArticlesList articles={dummyArticles} />
                </div>
            </div>
        </section>
    </>
);

export default HomePage;