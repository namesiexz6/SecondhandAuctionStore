import React from 'react'
import CountdownTime from './CountdownTime'
import useAppStore from '../../store/AppStore';
import { Link } from 'react-router-dom'


const ListProducts = ({ number }) => {

  const products = useAppStore((state) => state.products);
  const showProducts = (products || []).slice(0, number);


  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 my-5 justify-center w-[95%] mx-auto">
        {showProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="h-full flex flex-col justify-between p-2 border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:border-green-500 hover:border-2 transition-shadow duration-200 ease-in-out w-full mx-auto bg-white flex-grow">
              <img src={product.images?.[0]?.url || '/default-image.png'} alt={product.name} className="w-full aspect-square object-cover rounded-md" />
              <h3 className="text-xs sm:text-sm md:text-base lg:text-sm font-medium mt-2 text-gray-700 line-clamp-2 break-words overflow-hidden">{product.name}</h3>
              <div className="flex flex-col">

                <div className="flex flex-row justify-between items-top w-full mt-2">
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-xs text-gray-500">Start price:</span>
                    <span className="text-[10px] sm:text-sm md:text-base lg:text-sm text-blue-600 mt-1">{product.starting_price.toLocaleString()} ฿</span>
                  </div>
                  <div className="flex flex-col items-end flex-1 ">
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-xs text-gray-500">Time left:</span>
                    <span className="text-xs sm:text-lg md:text-xl lg:text-base font-semibold text-red-600"><CountdownTime endTime={product.end_date} /></span>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-top w-full mb-2">
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-xs text-gray-500 font-sans">Minimum Bid:</span>
                    <span className="text-[10px] sm:text-sm md:text-base lg:text-sm text-blue-600 mt-1">{product.min_bid_price.toLocaleString()} ฿</span>
                  </div>
                  <div className="flex flex-col items-end flex-1">
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-xs text-gray-500">Current bid:</span>
                    <span className="text-xs sm:text-lg md:text-xl lg:text-base font-semibold text-green-600">{product.auctioneerBoards && product.auctioneerBoards.length > 0 ? `${product.auctioneerBoards[0].price_offer.toLocaleString()} ฿` : '--//--'}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ListProducts;