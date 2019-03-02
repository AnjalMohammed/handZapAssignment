import styled from 'styled-components';
import { Spin } from 'antd';

export const Wrapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 9999;
	background: rgba(255,255,255, 0.7);
`;

export const Spinner = styled(Spin)`
&&&{
	position: absolute;
	top:50%;
	left: 50%;
	transform: translate(-50%, -50%);
}`;

export const AlbumListContainer = styled.div`
	display: flex;
	width: 50%;
	margin: 0 25%;
	padding: 1rem 0;
`;

export const AlbumItemContainer = styled.div`
	display: inline-block;
	width: 50%;
	text-align: center;
`;

export const ClickableText = styled.p`
	:hover{
		color: ${props => props.clickability ? 'orange' : 'default'};
		cursor: ${props => props.clickability ? 'pointer' : 'default'};
	}
`;

export const ProfileImage = styled.img`
	height: 60px;
	width: 60px;
	background-color: lightgrey;
`;