import type { NextPage } from 'next'
import Head from "next/head";
import Contact from "../components/Contact";
import Jumbotron from "../components/Jumbotron";
import Script from 'next/script';
import ProductList from "../components/ProductList"
import {IProduct} from "../components/Product"
import {GetStaticProps} from "next"

import iphone from "../public/iphone.png"

interface IProductListProps {
    products: IProduct[]
}

export default function Home({products}: IProductListProps) {
  return (
    <div>
        <Head>
            <title>Iphone Shop</title>
            <link rel="preconnect" href="https://app.snipcart.com" />
            <link rel="preconnect" href="https://cdn.snipcart.com" />
            <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
        </Head>
      <main className="main">
        <Jumbotron />
        <ProductList products={products.slice(0, 3)} />
        <Contact />
        <Jumbotron />
        <ProductList products={products.slice(3, 6)} />
      </main>
        <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
        <div hidden id="snipcart" data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx"/>
    </div>
  )
}

export const products: IProduct[] = [
    {
        id: "1",
        name: "iphone X",
        price: 300,
        description: "Superbe iPhone X comme neuf ;)",
        url: '/api/products/iphonex',
        image: iphone,
    },
    {
        id: "2",
        name: "iphone XS",
        price: 270,
        description: "Superbe iPhone XS comme neuf ;)",
        url: '/api/products/iphonexs',
        image: iphone,
    },
    {
        id: "3",
        name: "iphone XR",
        price: 250,
        description: "Superbe iPhone XR comme neuf ;)",
        url: '/api/products/iphonexr',
        image: iphone,
    },
    {
        id: "4",
        name: "iphone 11",
        price: 700,
        description: "Superbe iPhone 11 comme neuf ;)",
        url: '/api/products/iphone11',
        image: iphone,
    },
    {
        id: "5",
        name: "iphone 11S",
        price: 750,
        description: "Superbe iPhone 11S comme neuf ;)",
        url: '/api/products/iphone11s',
        image: iphone,
    },
    {
        id: "6",
        name: "iphone 11R",
        price: 780,
        description: "Superbe iPhone 11R comme neuf ;)",
        url: '/api/products/iphone11r',
        image: iphone,
    },
]

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            products
        }
    }
}
