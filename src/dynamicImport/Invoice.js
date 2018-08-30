import React from 'react';
import Loadable from 'react-loadable';

const Invoice = Loadable({
    loading: () => <span />,
    loader: () => import(/* webpackChunkName: 'Invoice' */'../components/Tables/Invoice')
});

export default Invoice;