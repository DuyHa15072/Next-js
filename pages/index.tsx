import Header from '@/components/Header'
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
     <header>
      <Header />
       <h1 className='text-3xl font-bold underline'>Home page</h1>
       <Link href="/products">Products</Link>
       <Link href="/about">About</Link>
     </header>

    </div>
  )
}

export default Home
