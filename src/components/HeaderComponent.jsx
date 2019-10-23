import React from 'react';
import styled from 'styled-components';

export const HeaderComponent = () => {
    return (
        <StyledHeader>
            <button onClick={() => window.location.assign('/view-urls')}>View All URLs</button>
        </StyledHeader>
    )
};

export default HeaderComponent;


const StyledHeader = styled.div`
    margin-top: 30px;
    height: 50px;
    padding-bottom: 30px;
`;