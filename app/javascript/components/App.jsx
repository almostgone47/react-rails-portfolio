import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import AboutPage from './AboutPage/AboutPage';
import BlogPage from './Blog/Blogs';
import NewBlog from './Blog/NewBlog';
import Blog from './Blog/Blog';
import Resume from './Resume/Resume';

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={AboutPage} />
                <Route path="/new_blog" exact component={NewBlog} />
                <Route path="/blog/:id" exact component={Blog} />
                <Route path="/blog" exact component={BlogPage} />
                <Route path="/resume" exact component={Resume} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;