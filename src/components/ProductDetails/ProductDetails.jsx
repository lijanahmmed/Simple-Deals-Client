import React, { useRef } from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {
    const { _id: productId } = useLoaderData();
    const bidModalRef = useRef(null);
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;