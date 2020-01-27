import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import routes from './configs/routes';

export const App = () => (
    <Router>
        <Switch>
            {routes.map(({ path, exact, Component, Layout }) => (
                <Route
                    key={path || 'NotFound'}
                    path={path}
                    exact={exact}
                    render={
                        (props) => ( Layout ?
                                <Layout {...props}>
                                    <Component {...props} />
                                </Layout>
                                :
                                <Component {...props}/>
                        )} />
            ))}
        </Switch>
    </Router>
)