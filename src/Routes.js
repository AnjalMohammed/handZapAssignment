import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';

import { Wrapper, Spinner } from './styledCSS/styles';


// const Login = Loadable({
//     loader: () => import('./Scenes/Login/Login'),
//     loading: () => <Wrapper>
//         <Spinner />
//     </Wrapper>,
// });

const AlbumPage = Loadable({
    loader: () => import('./Scenes/AlbumPage/AlbumPage'),
    loading: () => <Wrapper><Spinner /></Wrapper>,
});

const Routes = () => (
    <Switch>
        <Route exact path="/" component={AlbumPage} />
    </Switch>
);

export default Routes;
