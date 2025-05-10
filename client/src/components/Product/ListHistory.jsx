import React, { useEffect } from 'react'
import CountdownTime from './CountdownTime'
import useAppStore from '../../store/AppStore'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const ListHistory = () => {
  const user = useAppStore((state) => state.user)
  const auctioneerBoards = useAppStore((state) => state.auctioneerBoards) || []
  const getAuctUser = useAppStore((state) => state.getAuctUser)
  const token = useAppStore((state) => state.token)
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.id) {
      getAuctUser(user.id, token)
    }
  }, [user, token, getAuctUser])

  // Function to check auction status
  const getStatus = (auctionEnd, isHighestBidder) => {
    const now = new Date();
    const end = new Date(auctionEnd);
    if (now < end) return { label: 'Bidding', color: 'bg-yellow-100 text-yellow-800' };
    if (isHighestBidder) return { label: 'Won', color: 'bg-green-100 text-green-800' };
    return { label: 'Lost', color: 'bg-red-100 text-red-800' };
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      <h2 className="text-xl font-bold mb-4">My Auction History</h2>
      <div className="flex flex-col gap-4">
        {auctioneerBoards.length === 0 && (
          <div className="text-center text-gray-500">No auction history yet</div>
        )}
        {auctioneerBoards.map((bid) => {
          const product = bid.product || {}
          const status = getStatus(product.end_date, bid.price_offer === (product.auctioneerBoards && product.auctioneerBoards[0]?.price_offer))
          const isAuctionEnded = new Date() > new Date(product.end_date);
          const handleProductClick = (e) => {
            if (isAuctionEnded) {
              e.preventDefault();
              toast.info('The auction has ended. You cannot view product details.');
            } else {
              navigate(`/product/${product.id}`);
            }
          };
          return (
            <div key={bid.id} onClick={handleProductClick} className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg shadow bg-white">
              <button onClick={handleProductClick} className="block focus:outline-none" style={{background:'none',border:'none',padding:0,cursor:'pointer'}}>
                <img src={product.images && product.images[0]?.url} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
              </button>
              <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex-1">
                  <button onClick={handleProductClick} className="font-semibold text-base sm:text-lg hover:underline bg-transparent border-none p-0 m-0 cursor-pointer focus:outline-none text-left">
                    {product.name}
                  </button>
                  <div className="text-xs text-gray-500 mt-1">Time left: <span className="text-red-500 font-semibold"><CountdownTime endTime={product.end_date} /></span></div>
                  <div className="text-xs text-gray-500 mt-1">Final bid: <span className="text-green-600 font-semibold">{product.auctioneerBoards && product.auctioneerBoards[0]?.price_offer ? product.auctioneerBoards[0].price_offer.toLocaleString() : '-'} บาท</span></div>
                  <div className="text-xs text-gray-500 mt-1">Your bid: <span className="font-semibold">{bid.price_offer?.toLocaleString()} บาท</span></div>
                </div>
                <div className="flex flex-col items-center sm:items-end">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${status.color}`}>{status.label}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListHistory;