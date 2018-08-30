import React from 'react';
import Loadable from 'react-loadable';

const Operate = Loadable({
    loading: () => <span />,
    loader: () => import(/* webpackChunkName: 'Operate' */'../containers/Modals/Operate')
});

export default Operate;
