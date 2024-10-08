import { createContext, useContext, useState } from 'react'

import {
    IProductCard,
    IProductContext,
    IProductProvider,
    ISelectOrder,
} from '@/interface/interface'

import { ProductOrder } from '@/enum'


const ProductContext = createContext({} as IProductContext)

export default function ProductProvider({ children }: IProductProvider) {
    const [products, setProducts] = useState<IProductCard[]>([])
    const [search, setSearch] = useState('')
    const [filters, setFilters] = useState<IProductContext['filters']>({
        session: [],
        category: [],
        brand: [],
        gender: [],
    })
    const [order, setOrder] = useState<ISelectOrder['options']>([
        { label: ProductOrder.RELEVANT, value: ProductOrder.RELEVANT },
        { label: ProductOrder.LOWPRICE, value: ProductOrder.LOWPRICE },
        { label: ProductOrder.HIGHPRICE, value: ProductOrder.HIGHPRICE },
    ])

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                search,
                setSearch,
                filters,
                setFilters,
                order,
                setOrder,
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductContext)