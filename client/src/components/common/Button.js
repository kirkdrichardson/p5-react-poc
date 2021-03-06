import React from 'react';
import styled, {css} from 'styled-components';

import {NavLink} from 'react-router-dom';

export const Button = styled.button`
	padding: 1rem;
	min-width: 150px;

	color: #fff;
	transition: all 0.2s ease-in;

	background-color: ${props => props.secondary ? '#fff' : props.theme.colors.primary};
	border: 2px solid ${props => props.secondary ? props.theme.colors.primary : 'transparent'};
	border-radius: 4px;

	a {
		text-decoration: none;
		color: ${props => props.theme.colors.primary};
	}

	&:hover {
		cursor: pointer;

		background-color: ${props => props.theme.colors.hover};
		border-color: transparent;
		color: #fff;
		a {
			color: inherit;
		}
	}
`;

Button.Link = (props) => (
	<Button secondary>
		<NavLink to={props.to}>{props.children}</NavLink>
	</Button>
);