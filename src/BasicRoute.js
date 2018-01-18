import React from 'react';
import { 
    BrowserRouter as  Router,
    Route,
    Link
} from 'react-router-dom';

const BasicRoute = () => (
    <Router>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/topics'>Topics</Link></li>
            </ul>
            <hr />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/topics' component={Topics} />
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h1>這是home頁面</h1>
    </div>
);

const About = ({match}) => (
    <div>
        <h1>這是About頁面</h1>
        <ul>
            <li><Link to={`${match.url}/page1`}>page1</Link></li>
            <li><Link to={`${match.url}/page2`}>page2</Link></li>
            <li><Link to={`${match.url}/page3`}>page3</Link></li>
            <li><Link to={`${match.url}/page4`}>page4</Link></li>
        </ul>
        <Route path={`${match.url}/:topicid`} component={topic} />
        <Route exact path={match.url} render = {() => (
            <h4>這是page的初始頁</h4>
        )} />
    </div>
);

const topic = ({match}) => (
    <div>
        <h4>
            這是{match.params.topicid}頁面
        </h4>
    </div>
);

const Topics = () => (
    <div>
        <h1>這是topics頁面</h1>
    </div>
);


export default BasicRoute;