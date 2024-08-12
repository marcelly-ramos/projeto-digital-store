import React from 'react'

import { ILayout } from '@/interface/interface'

import ProductProvider from '@/context/useProductContext'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <ProductProvider>
      <div className="flex flex-col bg-white2">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </ProductProvider>
  )
}

export default Layout
