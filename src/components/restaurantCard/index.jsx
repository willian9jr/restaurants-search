import React from 'react';
import ReactStars from "react-rating-stars-component"

import restaurante from '../../assets/restaurante.jpg';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto} from './styles'

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c"/>
            <Address>Av Ipanema, 1999</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt="Foto do Restaurante"/>
    </Restaurant>);

export default RestaurantCard;