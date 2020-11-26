import styled from 'styled-components';

export const SocialSection = styled.div`
    height: auto;
    overflow: hidden
`

export const Social = styled.div `
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => props.id === 1 ? '#3b5998' : ''};
    background: ${props => props.id === 2 ? '#498cbf' : ''};
    background: ${props => props.id === 3 ? '#cc2127' : ''};
`

export const Icon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
`

export const P = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    margin: 0;
    padding: 0;
`

export const PSpan = styled.span`
    display: block;
    margin-bottom: 0;
    font-weight: ${props => props.normal ? 'normal' : ''};

`