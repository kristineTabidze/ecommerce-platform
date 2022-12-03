import React from 'react'
import ProductPage from '../../components/organisms/ProductPage';
import { IProduct } from '../../components/organisms/ProductPage/types';

const sampleProduct: IProduct = {
    ampModel: 200,
    effectsLoop: true,
    inputs: '2 x 1/4"',
    outputs: '2 x 1/4"',
    midi: 'IN',
    height: 8.54,
    width: 12.2,
    depth: 6.1,
    weight: 10.5,
    price: '1,400 $',
    images: ['https://www.americanmusical.com/images/items/1200/Blackstar-HT-1R-Head-1200-LRG.jpg'],
};

const Product: React.FC = () => {
    return (
        <div>
            <ProductPage {...sampleProduct} />
        </div>
    )
}

export default Product;