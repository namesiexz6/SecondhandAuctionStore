import React from 'react'
import ContentCarousel from '../components/Product/ContentCarousel'
import ListProducts from '../components/Product/ListProducts'
import useAppStore from '../store/AppStore';


const Home = () => {
  const getProduct = useAppStore((state) => state.actionGetAllProducts);

  React.useEffect(() => {
    getProduct(10);
  }, []);

  return (
    <>
      <div>
        <ContentCarousel />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center mt-4">Featured Products</h1>
        <ListProducts number={10} />
      </div>
    </>
  )
}

export default Home;