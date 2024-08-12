import React from 'react'

import { IProductListing } from '@/interface/interface'

import ProductCard from '../ProductCard/ProductCard'

const ProductListing: React.FC<IProductListing> = ({ products }) => {
  return products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ))
}

export default ProductListing
