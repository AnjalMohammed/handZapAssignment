import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import DetailList from '../../Components/DetailList/DetailList';

import { setPhotoData } from '../../actions/photoActions';

import { AlbumListContainer, AlbumItemContainer } from '../../styledCSS/styles';

class PhotoPage extends Component {

    componentDidMount() {
        FB.api(
            `/${this.props.match.params.albumId}/photos`,
            (response) => {
                if (response && !response.error) {
                    this.props.setAlbumPictures(response.data);
                }
            }
        );

        FB.api(
            `/${this.props.match.params.albumId}/picture`,
            function (response) {
                if (response && !response.error) {
                    console.log(response);
                }
                else
                    console.log("albumBannerApi failed", response.error);
            }
        );
    }

    componentWillUnmount() {
        this.props.setAlbumPictures([]);
    }

    render() {
        return (
            <div>
                <h4 className="bold mb1 center">List of albums in your profile</h4>
                <AlbumListContainer>
                    <AlbumItemContainer >
                        <p className="bold">Name of Photo</p>
                    </AlbumItemContainer>
                    <AlbumItemContainer >
                        <p className="bold">Date of Creation</p>
                    </AlbumItemContainer>
                </AlbumListContainer>
                <DetailList
                    clickable={false}
                    listContent={this.props.photos}
                />
            </div>
        )
    }
}

PhotoPage.propTypes = {
    setAlbumPictures: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    photos: state.photo.albumPhotos,
});

const mapDispatchToProps = dispatch => ({
    setAlbumPictures: pictureData => dispatch(setPhotoData(pictureData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoPage));