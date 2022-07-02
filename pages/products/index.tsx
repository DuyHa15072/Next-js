import React from 'react'
import Link from 'next/link'
import { GetStaticProps, GetStaticPropsContext  } from 'next'

type ProductsProps = {
  products: any[]
}

const Products = ({products}: ProductsProps) => {
  if (!products) return null;
    
  return (
    <div>{products.map(item => (
      <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
    ))}</div>
    
  )
}
// server
export const getStaticProps: GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext) => {
  console.log('getStaticProps');
  const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`);
  const data = await response.json()
  return {
    props: {
      products: data.map((item: any) => ({id: item.id, name: item.name}))
    },
    revalidate: 5
  }
}
export default Products