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
    <div className='pt-16 pt-16'>
      <div className='flex flex-col md:flex-row'>
        {/* Mobile Search Carousel Button */}
        <div className='block md:hidden w-full p-2 bg-gray-100'>
          <button
            className='w-full py-2 px-4 bg-blue-500 text-white rounded mb-2 font-semibold'
            onClick={() => setShowMobileSearch((v) => !v)}
          >
            {showMobileSearch ? 'ปิดตัวกรองสินค้า' : 'แสดงตัวกรองสินค้า'}
          </button>
          {showMobileSearch && (
            <div className='w-full'>
              <SearchProducts onMobileSubmit={() => setShowMobileSearch(false)} />
            </div>
          )}
        </div>

        {/* SearchBar (Sidebar) */}
        <div className='hidden md:block w-1/4 p-4 bg-gray-100 h-screen'>
          <SearchProducts />
        </div>

        {/* Product */}
        <div className='w-full md:w-3/4'>
          <p className='text-2xl font-bold my-4 ml-4'>สินค้าทั้งหมด</p>
          <ListProducts number={numberOfProducts} />
          {products.length > 20 && (
            <div className='flex justify-center'>
              <button className='py-2 px-4 bg-gray-300 text-white rounded mt-4 mx-4 hover:bg-gray-400' onClick={() => setNumberOfProducts((prev) => prev + 10)}>แสดงสินค้าเพิ่มเติม</button>
            </div>
          )}
        </div>

      </div>
    </div>

  )

}

export default Shop