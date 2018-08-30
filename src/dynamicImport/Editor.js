import React from 'react';
import Loadable from 'react-loadable';

const Editor = Loadable({
    loading: () => <span />,
    loader: () => import(/* webpackChunkName: 'Editor' */'../containers/Modals/Editor')
});

export default Editor;