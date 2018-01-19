import React from 'react';
import { 
    BrowserRouter as  Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

const RedirectRoute = () => (
    <Router>
        <div>
            <TopTip />
            <ul>
                <li><Link to='/public'>public page</Link></li>
                <li><Link to='/protected'>protected page</Link></li>
            </ul>
            <Route path='/public' component={Public} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/protected' component={Protected} />
        </div>
    </Router>
);

const Public = () => (
    <div>
        <h3>这是publicpage,都可以看到</h3>
    </div>
);
const Protected = () => (
    <div>
        <h3>这是proctedpage,登陆后可以看到</h3>
    </div>
);

const TopTip = withRouter(({history}) => (
    personSign.isSignIn ? (
        <p>
            welcome!
            <button onClick={() => {
                personSign.signOut(() => history.push('/'))
            }}>
                退出
            </button>
        </p>
    ) : (
        <p>你没有登录</p>
    )
));

const personSign = {
    isSignIn: false,
    signIn(cb) {
        this.isSignIn = true;
        setTimeout(cb,100);
    },
    signOut(cb) {
        this.isSignIn = false;
        setTimeout(cb,100);
    }
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        personSign.isSignIn ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: {
                    form: props.location
                }
            }} />
        )
    )}/>
);

class Login extends React.Component {
    state = {
        redirectToReferrer: false,
    }

    login = () => {
        personSign.signIn(() => {
            this.setState({
                redirectToReferrer: true,
            })
        })
    }
    render() {
        const {form} =this.props.location;
        const {redirectToReferrer} = this.state;
        if(redirectToReferrer){
            return <Redirect to={form} />
        }
        return (
            <div>
                <p>
                    你必须先登录才能看protectedpage的内容
                </p>
                <button onClick={this.login}>登录</button>
            </div>
        );
    }
}

export default RedirectRoute;