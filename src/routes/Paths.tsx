import { ReactElement } from "react"
import { Route, Routes } from "react-router-dom"

import { HomePage } from "@/pages/HomePage/HomePage"

import ProductListingPage from "@/pages/ProductListingPage/ProductListingPage"

import Layout from "@/components/Layout/Layout"

const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/produtos"
        element={
          <Layout>
            <ProductListingPage />
          </Layout>
        }
       />
    </Routes>
  )
}

export { AppRoutes }