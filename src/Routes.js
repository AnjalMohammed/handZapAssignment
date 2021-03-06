import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';

import { Wrapper, Spinner } from './styledCSS/styles';


const PhotoPage = Loadable({
    loader: () => import('./Scenes/PhotoPage/PhotoPage'),
    loading: () => <Wrapper><Spinner /></Wrapper>,
});

const AlbumPage = Loadable({
    loader: () => import('./Scenes/AlbumPage/AlbumPage'),
    loading: () => <Wrapper><Spinner /></Wrapper>,
});

const Routes = () => (
    <Switch>
        <Route exact path="/" component={AlbumPage} />
        <Route exact path="/albums/:albumId/pictures" component={PhotoPage} />
    </Switch>
);

export default Routes;
