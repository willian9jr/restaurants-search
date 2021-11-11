import styled from 'styled-components';

import Slider from "react-slick";
import { Modal } from '../../components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
`

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 16px;

`;

export const Logo = styled.img`
    margin-bottom: 15px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
`;

export const Carousel = styled(Slider)`
    .slick-slide{
        margin-right: 30px;
    }
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`;

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    line-height: 29px;
    font-size: 24px;
    font-weight: bold;
`;

export const ModalContent = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-weight: normal;
    line-height: 19px;
    font-size: 16px;
`;