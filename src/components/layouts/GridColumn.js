import styled from 'styled-components';
import config from '../../config';

const GridColumn = styled.div`
    @media only screen and (min-width: ${config.breakpoints.tabletPortrait}) {           
        ${props => !props.width && `
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        `}   
        width: ${props => props.width ? props.width : 'auto'};
        margin: 0 ${props => props.margin ? props.margin : config.grid.margin};
        
        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }        
    }

    ${props => props.customCSS && props.customCSS}
`;

export default GridColumn;