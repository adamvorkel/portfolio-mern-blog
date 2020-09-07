import React from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import Nav from './Nav';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles-list" component={ArticlesListPage} />
        <Route path="/article/:name" component={ArticlePage} />
      </div>
    </Router>
  );
}

export default App;
