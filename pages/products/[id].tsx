import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type ProductsProps = {
  product : any;
}

const ProductDetail = ({product}: ProductsProps) => {
  if(!product) return null;
  return (
    <div>{product.name}</div>
  )
}
// export const getStaticPaths: GetStaticPaths = async () => {
//   const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
//   const paths = data.map((product: any) => (
//     { params: { id: product.id } }
//   ))
//   return {
//     paths,
//     fallback: false
//   }
// }
// // server
// export const getStaticProps: GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext) => {
//   const product = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json();
//   return {
//     props: {product},
//     revalidate: 10
//   }
// }
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  console.log('context', context);
  context.res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate")
  const product = await (await fetch(`https://5e79b4b817314d00161333da.mockapi.io/posts/${context.params?.id}`)).json();
  return {
    props: { product }
  }
}
export default ProductDetail