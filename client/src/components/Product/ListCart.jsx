import React, { useState, useEffect } from 'react'
import CountdownTime from './CountdownTime'
import useAppStore from '../../store/AppStore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const ListCart = () => {
  const [selected, setSelected] = useState([]);
  const user = useAppStore((state) => state.user);
  const token = useAppStore((state) => state.token);
  const carts = useAppStore((state) => state.carts);
  const getCart = useAppStore((state) => state.actionGetCartByUser);
  const setCartsForPayment = useAppStore((state) => state.setCartsForPayment);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && token) {
      getCart(user.id, token);
    }
  }, [user, token, getCart]);

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getPayDeadline = (createdAt) => {
    const deadline = new Date(createdAt);
    deadline.setDate(deadline.getDate() + 1);
    return deadline.toISOString();
  };

  // เมื่อกดชำระเงิน ให้เก็บ cart ที่เลือกไว้ใน store แล้วไปหน้า payment
  const handlePay = () => {
    const selectedCarts = carts.filter((cart) => selected.includes(cart.id));
    setCartsForPayment(selectedCarts);
    navigate('/user/payment');
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 w-full max-w-6xl mx-auto my-8">
      {/* col1: รายการ cart */}
      <div className="w-full lg:w-3/4 bg-white rounded-lg shadow p-4 flex flex-col gap-4">
        <h2 className="text-lg font-bold mb-2">Auction Items You Won</h2>
        {carts && carts.length > 0 ? carts.map((cart) => (
          <div key={cart.id} className="flex flex-row items-center gap-4 border rounded p-3">
            <input
              type="checkbox"
              checked={selected.includes(cart.id)}
              onChange={() => handleSelect(cart.id)}
              className="accent-green-600 w-5 h-5 mt-1 sm:mt-0"
            />
            <img src={cart.product?.images?.[0]?.url || 'https://picsum.photos/200'} alt={cart.product?.name} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-1">
              <div className="font-semibold text-base">{cart.product?.name || '-'}</div>
              <div className="text-xs text-gray-500 mt-1">Winning Price: <span className="text-green-600 font-semibold">{cart.final_price_product?.toLocaleString()} ฿</span></div>
              <div className="text-xs text-gray-500 mt-1">Pay within: <span className="text-red-500 font-semibold"><CountdownTime endTime={getPayDeadline(cart.createdAt)} /></span></div>
            </div>
          </div>
        )) : <div className="text-gray-400">No cart items</div>}
        {/* Payment button & rules (mobile/tablet) */}
        <div className="block lg:hidden mt-4">
          <button
            className="w-full bg-green-600 text-white py-2 rounded font-bold disabled:bg-gray-300"
            disabled={selected.length === 0}
            onClick={() => {
              if (selected.length === 0) {
                toast.info('Please select at least one item to pay.');
                return;
              }
              handlePay();
            }}
          >
            Proceed to Payment
          </button>
          <div>
            <h3 className="font-bold text-base mb-2 mt-4">Please Note</h3>
            <ul className="text-xs text-gray-700 list-disc pl-4 mb-4">
              <li>Please pay within 24 hours after winning the auction.</li>
              <li>If you do not pay on time, your bidding rights will be temporarily suspended.</li>
              <li>If you have any questions, please contact customer service.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* col2: Rules and payment button (desktop only) */}
      <div className="hidden lg:flex flex-col w-1/4 bg-gray-50 rounded-lg shadow p-4 justify-between min-h-[300px]">
        <div>
          <h3 className="font-bold text-base mb-2">Please Note</h3>
          <ul className="text-xs text-gray-700 list-disc pl-4 mb-4">
            <li>Please pay within 24 hours after winning the auction.</li>
            <li>If you do not pay on time, your bidding rights will be temporarily suspended.</li>
            <li>If you have any questions, please contact customer service.</li>
          </ul>
        </div>
        <button
          className="w-full bg-green-600 text-white py-2 rounded font-bold disabled:bg-gray-300 mt-4"
          disabled={selected.length === 0}
          onClick={() => {
            if (selected.length === 0) {
              toast.info('Please select at least one item to pay.');
              return;
            }
            handlePay();
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default ListCart;