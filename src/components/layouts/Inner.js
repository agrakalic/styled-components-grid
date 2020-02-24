import styled from 'styled-components';
import config from '../../config';

const Inner = styled.div`
    margin: 0 auto;
    width: ${config.layout.width};
    max-width: ${config.layout.maxWidth};
    text-align: left;
    position: relative;

    ${props => props.customCSS && props.customCSS}
`;

export default Inner;