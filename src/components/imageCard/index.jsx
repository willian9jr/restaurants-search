import React, {useState, useEffect} from 'react';
import styles from 'styled-components'

import Skeleton from '../skeleton'

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

const ImageCard = ({photo, title}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() =>{
        const imageLoaded = new Image();
        imageLoaded.src = photo;
        imageLoaded.onload = () => setImageLoaded(true);
    },[photo]);

    return(
        <>
            {imageLoaded ? (
                <Card photo={photo}> 
                    <Title>{title}</Title>
                </Card>
            ) : (<Skeleton width="90px" height="90px"/>
            )}
        </>
    )
    
};

export default ImageCard;