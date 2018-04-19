import React from 'react';
import { 
    BrowserRouter as  Router,
    Route,
    NavLink
} from 'react-router-dom';

const CustomRoute = () => (
    <Router>
        <div>
           <ActiveIcon activeOnlyExect={true} to='/' label='Home' />
           <ActiveIcon to='/about' label='About' />
           <hr />
           <Route exact path='/' component={Home} />
           <Route path='/about' component={About} />
        </div>
    </Router>
);

const ActiveIcon = ({label, to, activeOnlyExect}) => (
    <Route path={to} exact={activeOnlyExect} children={({match}) => (
        <div>
            {match ? '>' : ''}
            <NavLink activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }} to={to}>{label}</NavLink>
        </div>
    )} />
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);


export default CustomRoute;