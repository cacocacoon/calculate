import React from 'react';
import Loadable from 'react-loadable';

const Login = Loadable({
    loading: () => <span />,
    loader: () => import(/* webpackChunkName: 'LogIn' */'../containers/Modals/LogIn')
});

export default Login;