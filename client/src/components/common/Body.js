import React from 'react';

import styled from 'styled-components';

const Body = styled.main`
	margin: 0 auto;

	width: 100%;
	max-width: ${props => props.theme.body.rowWidth};
`;

export default props => {
	return (
		<Body>{props.children}</Body>
	)
}