import React from 'react'
import CountdownTime from '../Product/CountdownTime';
import { Navigate, useParams } from 'react-router-dom';
import useAppStore from '../../store/AppStore';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';

const ViewProduct = () => {
  const { id } = useParams();
  const actionBid = useAppStore((state) => state.actionAddAuctioneerBoard);
  const getAuctioneerBoard = useAppStore((state) => state.actionGetAuctioneerBoardByProductId);
  const getProduct = useAppStore((state) => state.actionGetProductById);
  const user = useAppStore((state) => state.user);
  const token = useAppStore((state) => state.token);
  const products = useAppStore((state) => state.products || []);
  const product = products.find((p) => Number(p.id) === Number(id));
  const auctioneerBoard = useAppStore((state) => state.auctioneerBoards || []);
  const setAuctioneerBoard = useAppStore((state) => state.setAuctioneerBoards);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  const [showTimeUp, setShowTimeUp] = React.useState(false);
  
  const [bidAmount, setBidAmount] = React.useState(0);
  const [mainImgIdx, setMainImgIdx] = React.useState(0);
  
  
  
  React.useEffect(() => {
    if (!product && id) {
      getProduct(Number(id));
    }
  }, [product, id, getProduct]);
  // ...existing code...
  React.useEffect(() => {
    if (!product?.id) return;
    // สร้าง socket เฉพาะใน effect
    const socket = io(import.meta.env.VITE_SOCKET_URL, { transports: ['websocket', 'polling'] });
    socket.emit('joinProductRoom', product.id);
    
    socket.on('auctioneerBoardUpdate', (data) => {
      setAuctioneerBoard(data);
    });
    
    return () => {
      socket.emit('leaveProductRoom', product.id);
      socket.off('auctioneerBoardUpdate');
      socket.disconnect(); // cleanup
    };
  }, [product?.id, setAuctioneerBoard]);
  
  React.useEffect(() => {
    if (product) {
      getAuctioneerBoard(product.id);
    }
  }, [product?.id]);
  
  const currentPrice = auctioneerBoard.length > 0
    ? auctioneerBoard[0].price_offer
    : product?.starting_price || 0;

  const minBid = product?.min_bid_price || 0;

  React.useEffect(() => {
    setBidAmount(currentPrice + minBid);
  }, [currentPrice, minBid]);
  
  if (!product) {
    return <div className="text-center text-red-500 py-10">Product not found</div>;
  }
  const isAuctionEnded = new Date() > new Date(auctioneerBoard.length > 0 ? auctioneerBoard[0].product.end_date : product.end_date);
  const images = product.images?.map(img => img.url) || [];
  const auctionEnd = auctioneerBoard.length > 0 ? auctioneerBoard[0].product.end_date : product.end_date;

  const startPrice = product.starting_price;


  const handleBidChange = (delta) => {
    setBidAmount((prev) => {
      const next = prev + delta;
      if (next < currentPrice + minBid) return currentPrice + minBid;
      return next;
    });
  };

  const handleInputChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) val = currentPrice + minBid;
    if (val < currentPrice + minBid) val = currentPrice + minBid;
    setBidAmount(val);
  };
  
  const handleBid = (e) => {
    e.preventDefault();
    try {
      if (!user || !token) {
        toast.info('Please log in to place a bid.');
        setRedirect(true);
        return;
        
      }
      
      const user_id = user.id;
      const product_id = Number(id);
      const price_offer = bidAmount;

      console.log('Bid:', { user_id, product_id, price_offer });
      if (price_offer < currentPrice + minBid) {
        toast.error(`Bid amount must be at least ${currentPrice + minBid} ฿`);
        return;
      }

      actionBid({ product_id, user_id, price_offer }, token);
      setBidAmount(price_offer + minBid);
      toast.success('Your bid has been placed successfully!');
    } catch (error) {
      console.error('Error placing bid:', error);
      toast.error('Failed to place bid. Please try again later.');
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-6xl w-full mx-auto my-4 p-2 sm:p-4 bg-white rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <img
            src={images[mainImgIdx] || '/default-image.png'}
            alt={product.name}
            className="w-full max-w-xs object-cover rounded-md bg-gray-200 aspect-square"
          />
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {images.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={product.name + ' ' + (idx + 1)}
                className={`w-14 h-14 object-cover rounded cursor-pointer border-2 ${mainImgIdx === idx ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => setMainImgIdx(idx)}
              />
            ))}
          </div>
        </div>
        {/* Product Info & Auction */}
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 break-words">{product.name}</h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-2">
            <div className="flex-1 min-w-[150px]">
              <div className="text-sm text-gray-500">Time</div>
              <span className="font-semibold text-2xl sm:text-3xl text-red-600">
                <CountdownTime endTime={auctionEnd} />
              </span>
              <div className="text-sm text-gray-500 mt-2">Start Price</div>
              <div className="font-semibold ">{startPrice} ฿</div>
              <div className="text-sm text-gray-500 mt-2">Minimum Bid</div>
              <div className="font-semibold ">{minBid != null ? minBid.toLocaleString() : '-'} ฿</div>
            </div>
            <div className="flex-1 min-w-[200px] sm:ml-10">
              <div className="text-sm text-gray-500">Current highest bid</div>
              <div className="font-semibold text-green-700 text-2xl sm:text-3xl">{currentPrice != null ? currentPrice.toLocaleString() : '-'} ฿</div>
              <div className="text-sm text-gray-500 mt-2">Place your bid</div>
              <form onSubmit={e => e.preventDefault()} className="mt-2 flex flex-wrap items-center gap-2">
                <button type="button" className="px-2 py-1 bg-gray-200 rounded" onClick={() => handleBidChange(-minBid)} disabled={isAuctionEnded}>-</button>
                <input
                  type="number"
                  min={0}
                  value={bidAmount}
                  onChange={handleInputChange}
                  className="w-20 px-2 py-1 border rounded text-right"
                  disabled={isAuctionEnded}
                />
                <button type="button" className="px-2 py-1 bg-gray-200 rounded" onClick={() => handleBidChange(minBid)} disabled={isAuctionEnded}>+</button>
                <button
                  type="button"
                  className="ml-2 px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                  disabled={isAuctionEnded}
                  onClick={() => {
                    if (isAuctionEnded) {
                      setShowTimeUp(true);
                    } else {
                      setShowConfirm(true);
                    }
                  }}
                >
                  Bid
                </button>
              </form>
              {showTimeUp && (
                <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-6 shadow-lg max-w-xs w-full">
                    <div className="font-bold text-lg mb-2 text-red-500">Auction ended</div>
                    <div className="mb-4">You cannot bid because the auction has ended.</div>
                    <div className="flex justify-end">
                      <button
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                        onClick={() => setShowTimeUp(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {showConfirm && (
                <div className=" fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-6 shadow-lg max-w-xs w-full">
                    <div className="font-bold text-lg mb-2">Confirm your bid</div>
                    <div className="mb-4">Do you want to bid {bidAmount != null ? bidAmount.toLocaleString() : '-'} Baht?</div>
                    <div className="flex justify-end gap-2">
                      <button
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => setShowConfirm(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                        onClick={e => {
                          setShowConfirm(false);
                          handleBid(e);
                        }}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Current highest bid list */}
          <div className="bg-gray-100 rounded p-3 mt-2 overflow-x-auto">
            <div className="font-semibold mb-1">Current highest bid</div>
            <table className="w-full text-sm min-w-[200px]">
              <tbody>
                {Array.isArray(auctioneerBoard) && auctioneerBoard.map((bidder, idx) => (
                  <tr key={idx}>
                    <td className={`pr-2 whitespace-nowrap ${idx === 0 ? 'text-yellow-500 font-bold' : ''}`}>
                      {idx + 1}. {bidder.user !== undefined || bidder.user !== undefined ? bidder.user.name : '-'}
                      {idx === 0 && <span className="ml-1">🏆</span>}
                    </td>
                    <td className="text-right whitespace-nowrap">{bidder.price_offer != null ? bidder.price_offer.toLocaleString() : '-'} ฿</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Detail Product */}
      <div className="bg-gray-100 rounded mt-8 p-4">
        <div className="font-semibold text-lg mb-4 border-b border-red-200 pb-2 flex items-center gap-2">
          <span className="text-red-500 text-2xl">📝</span> Product Details
        </div>
        <div className='ml-4 mb-4'>
          <div className="text-gray-500 text-xs mb-1">Description</div>
          <p className="ml-2 text-gray-800 break-words mb-2 whitespace-pre-line">{product.description || '-'}</p>
        </div>
        <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="text-gray-500 text-xs mb-1">Size</div>
            <div className="ml-2 text-gray-800 break-words mb-2">{product.size || '-'}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Auction Start Date</div>
            <div className="ml-2 text-gray-800 break-words mb-2">{product.start_date ? new Date(product.start_date).toLocaleString() : '-'}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Condition</div>
            <div className="ml-2 text-gray-800 break-words mb-2">
              {product.condition !== undefined && product.condition !== null && product.condition !== ''
                ? `${product.condition} %`
                : '-'}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Auction End Date</div>
            <div className="ml-2 text-gray-800 break-words mb-2">{product.end_date ? new Date(product.end_date).toLocaleString() : '-'}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Condition details</div>
            <div className="ml-2 text-gray-800 break-words mb-2">{product.description_condition || '-'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;