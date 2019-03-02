import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import { AlbumListContainer, ClickableText, AlbumItemContainer, Wrapper, Spinner } from '../../styledCSS/styles';


const DetailList = props => (
    props.listContent.size === 0 ?
        <Wrapper>
            <Spinner />
        </Wrapper>
        :
        props.listContent.map(item => {
            const date = Moment(new Date(item.created_time)).format('Do MMM,YYYY');
            return (
                <AlbumListContainer key={item.id}>
                    <AlbumItemContainer >
                        <ClickableText clickability={props.clickable} onClick={() => props.handleOnClick(item.id)} className="m0">
                            {item.name ? item.name : 'No Title Available'}
                        </ClickableText>
                    </AlbumItemContainer>
                    <AlbumItemContainer >
                        <p className="m0">{date}</p>
                    </AlbumItemContainer>
                </AlbumListContainer>
            )
        })
);

DetailList.propTypes = {
    handleOnClick: PropTypes.func,
    listContent: PropTypes.array.isRequired,
    clickable: PropTypes.bool.isRequired,
}

DetailList.defaultProps = {
    handleOnClick: () => { },
}

export default DetailList;