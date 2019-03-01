import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const Header = props => (
    <div className="p2 mb1 flex items-center justify-center">
        <h3 className="m0 flex-auto">Hi <span className="bold">{props.userName}</span>,</h3>
        <div className="flex flex-auto items center justify-end">
            <span>space for profilePic</span>
            <Button className="ml2" type="primary">Log Out</Button>
        </div>
    </div>
);

Header.propTypes = {
    userName: PropTypes.string,
    profilePicData: PropTypes.object,
}

Header.defaultProps = {
    userName: '',
    profilePicData: {}
}

const mapStateToProps = state => ({
    userName: state.user.userName
});

export default connect(mapStateToProps)(Header);