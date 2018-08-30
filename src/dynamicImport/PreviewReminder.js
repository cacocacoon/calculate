import React from 'react';
import Loadable from 'react-loadable';

const PreviewReminder = Loadable({
    loading: () => <span />,
    loader: () => import(/* webpackChunkName: 'PreviewReminder' */'../components/Tables/PreviewReminder')
});

export default PreviewReminder;