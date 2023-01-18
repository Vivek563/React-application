import React, {useState, useEffect} from "react";
import Axios from "axios";

import {faker,random, commerce} from "faker-js/faker"
import {Container, col, Row} from "reactstrap"


const apikey = "INSERT_YOUR_KEY_HERE"

const localurl = "https://api.jsonserve.com/KBonX0"

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([])

// const fetchPhotos = async () => {
//     const response = await Axios.get(url, {
//         header: {
//             Authorization:apiKey
//         }
//     });


const fetchPhotos = async () => {
    const {data} = await Axios.get(localurl); 

const {photos} = data;

const allProduct = photos.map(photo => ({
    smallImage:photo.src.medium,
    tinyImage:photo.src.tiny,
    productName: random.word(),
    productPrice: commerce.price(),
    id: faker.datatype.uuid(),
}));

setProduct(allProduct);

};

 
useEffect(() => {
    fetchPhotos()
},[])

return(
    <Container fluid>
        <h1 className="text-success text-center">Buy page</h1>
        <Row>
            {product.map(product => (
                <span key = {product.id}>{product.productName}</span>
            ))}
        </Row>
    </Container>
)
}

export default BuyPage;