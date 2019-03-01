import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Moment from 'moment';

import { AlbumListContainer, AlbumItemContainer, ClickableText } from '../../styledCSS/styles';

const AlbumPage = props => {

    const routeToPictures = (albumId) => {
        props.history.push(`/${albumId}/pictures`)
    }

    return (
        <div>
            <h4 className="bold mb1 center">List of albums in your profile</h4>

            <AlbumListContainer>
                <AlbumItemContainer >
                    <p className="bold">Name of Album</p>
                </AlbumItemContainer>
                <AlbumItemContainer >
                    <p className="bold">Date of Creation</p>
                </AlbumItemContainer>
            </AlbumListContainer>

            {
                props.albums.map(albumDetails => {
                    const date=Moment(new Date(albumDetails.created_time)).format('Do MMM,YYYY');
                    return (
                        <AlbumListContainer key={albumDetails.id}>
                            <AlbumItemContainer >
                                <ClickableText onClick={() => routeToPictures(albumDetails.id)} className="m0">{albumDetails.name}</ClickableText>
                            </AlbumItemContainer>
                            <AlbumItemContainer >
                                <p className="m0">{date}</p>
                            </AlbumItemContainer>
                        </AlbumListContainer>
                    )
                })
            }
        </div>
    )
}

AlbumPage.propTypes = {
    albums: PropTypes.array,
    history: PropTypes.object.isRequired,
};

AlbumPage.defaultProps = {
    albums: [],
}

const mapStateToProps = state => ({
    albums: state.photo.albums
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumPage));