import React from 'react';
import styles from 'styled-components'

const Card = styles.div`
    display:flex;
    justify-content:center;
    padding: 5px;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`;

const Title = styles.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #ffffff;
    font-size:16px;
`;

const ImageCard = ({photo, title}) => (
    <Card photo={photo}> 
        <Title>{title}</Title>
    </Card>
);

export default ImageCard;