import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { AlbumListContainer, AlbumItemContainer } from '../../styledCSS/styles';
import DetailList from '../../Components/DetailList/DetailList';

const AlbumPage = props => {

    const routeToPictures = (albumId) => {
        props.history.push(`/albums/${albumId}/pictures`)
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

            <DetailList
                clickable={true}
                handleOnClick={id => routeToPictures(id)}
                listContent={props.albums}
            />
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