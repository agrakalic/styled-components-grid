import styled from 'styled-components';
import config from '../../config';

const GridRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;  
    @media only screen and (min-width: ${config.breakpoints.tabletPortrait}) {
        flex-direction: row;
    }

    ${props => props.customCSS && props.customCSS}
`;

export default GridRow;