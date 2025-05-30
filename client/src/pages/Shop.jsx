import React, { useState } from 'react'
import SearchProducts from '../components/Product/SearchProducts'
import ListProducts from '../components/Product/ListProducts'
import useAppStore from '../store/AppStore';

const Shop = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(20);
  const products = useAppStore((state) => state.products);
  const getProduct = useAppStore((state) => state.actionGetAllProducts);

  React.useEffect(() => {
    getProduct(20);
  }, []);


  return (
    <>
      <div className='flex flex-col lg:flex-row'>
        {/* Mobile Search Carousel Button */}
        <div className='block lg:hidden w-full p-2 bg-gray-100'>
          <button
            className='w-full py-2 px-4 bg-blue-500 text-white rounded mb-2 font-semibold'
            onClick={() => setShowMobileSearch((v) => !v)}
          >
            {showMobileSearch ? 'Close Filters' : 'Show Filters'}
          </button>
          {showMobileSearch && (
            <div className='w-full'>
              <SearchProducts onMobileSubmit={() => setShowMobileSearch(false)} />
            </div>
          )}
        </div>

        {/* SearchBar (Sidebar) */}
        <div className='hidden lg:block lg:w-1/4 p-4 bg-gray-100 min-h-screen'>
          <SearchProducts />
        </div>

        {/* Product */}
        <div className='w-full lg:w-3/4'>
          <p className='text-2xl font-bold my-4 ml-4'>All Products</p>
          <ListProducts number={numberOfProducts} />
          {products.length > 20 && (
            <div className='flex justify-center'>
              <button className='py-2 px-4 bg-gray-300 text-white rounded mt-4 mx-1 hover:bg-gray-400' onClick={() => setNumberOfProducts((prev) => prev + 10)}>Show More Products</button>
            </div>
          )}
        </div>

      </div>
    </>

  )

}

export default Shop