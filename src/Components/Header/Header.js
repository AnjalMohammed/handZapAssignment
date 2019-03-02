import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { ProfileImage } from '../../styledCSS/styles';

const logoutClick = () => {
    FB.logout(response => {
        if (response && !response.error)
            alert('logout successfull');
        else
            console.log(response.error)
    }
    );
}

const Header = props => (
    <div className="p2 mb1 flex items-center justify-center">
        <h3 className="m0 flex-auto">Hi <span className="bold">{props.userName}</span>,</h3>
        <div className="flex flex-auto items-center justify-end">
            <div>
                <ProfileImage src="" />
            </div>
            {
                props.history.location.pathname === '/' ?
                    <Button className="ml2" onClick={() => logoutClick()} type="primary">Log Out</Button>
                    :
                    <Button className="ml2" onClick={() => props.history.goBack()} type="primary"> Go Back</Button>
            }
        </div>
    </div>
);

Header.propTypes = {
    userName: PropTypes.string,
    profilePicData: PropTypes.object,
    history: PropTypes.object.isRequired,
}

Header.defaultProps = {
    userName: '',
    profilePicData: {}
}

const mapStateToProps = state => ({
    userName: state.user.userName
});

export default withRouter(connect(mapStateToProps)(Header));