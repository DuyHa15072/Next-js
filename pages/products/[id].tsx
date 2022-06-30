import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type ProductsProps = {
  product : any;
}

const ProductDetail = ({product}: ProductsProps) => {
  return (
    <div>ProductDetail</div>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
  const paths = data.map(product => (
    { params: { id: product.id } }
  ))
  return {
    paths,
    fallback: false
  }
}
// server
export const getStaticProps: GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext) => {
  const product = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json();
  return {
    props: {product}
  }
}
export default ProductDetail