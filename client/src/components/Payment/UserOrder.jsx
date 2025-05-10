import React from "react";
import useAppStore from '../../store/AppStore';

export default function UserOrder() {
  const cartsForPayment = useAppStore((state) => state.cartsForPayment) || [];

  const totalItems = cartsForPayment.length;
  const totalPrice = cartsForPayment.reduce((sum, item) => sum + (item.final_price_product || 0), 0);
  const shippingFee = totalItems > 0 ? 50 : 0;
  const grandTotal = totalPrice + shippingFee;

  return (
    <div className="bg-white rounded-lg shadow p-4 max-w-xl mx-auto">
      <h3 className="font-bold text-base mb-2">Order Summary</h3>
      {/* Product list */}
      <div className="flex flex-col gap-3 mb-4">
        {cartsForPayment.map((item) => (
          <div key={item.id} className="flex items-center gap-3 border rounded p-2">
            <img src={item.product?.images?.[0]?.url || 'https://picsum.photos/200'} alt={item.product?.name} className="w-16 h-16 object-cover rounded-md" />
            <div className="flex-1">
              <div className="font-semibold text-sm">{item.product?.name || '-'}</div>
              <div className="text-xs text-gray-500 mt-1">Price: <span className="text-green-600 font-semibold">{item.final_price_product?.toLocaleString()} ฿</span></div>
            </div>
          </div>
        ))}
      </div>
      {/* summary order */}
      <div className="flex justify-between text-sm mb-1">
        <span>Items</span>
        <span>{totalItems} pcs</span>
      </div>
      <div className="flex justify-between text-sm mb-1">
        <span>Subtotal</span>
        <span>{totalPrice.toLocaleString()} ฿</span>
      </div>
      <div className="flex justify-between text-sm mb-1">
        <span>Shipping Fee</span>
        <span>{shippingFee.toLocaleString()} ฿</span>
      </div>
      <div className="flex justify-between text-base font-bold border-t pt-2 mt-2">
        <span>Grand Total</span>
        <span className="text-green-600">{grandTotal.toLocaleString()} ฿</span>
      </div>
    </div>
  );
}
