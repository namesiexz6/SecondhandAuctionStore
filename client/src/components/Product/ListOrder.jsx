import React, { useEffect } from 'react';
import useAppStore from '../../store/AppStore';

const statusMap = {
  1: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  2: { label: "Paid", color: "bg-blue-100 text-blue-800" },
  3: { label: "Shipped", color: "bg-indigo-100 text-indigo-800" },
  4: { label: "Completed", color: "bg-green-100 text-green-800" },
  5: { label: "Cancelled", color: "bg-red-100 text-red-800" },
};

const ListOrder = () => {
  const user = useAppStore((state) => state.user);
  const token = useAppStore((state) => state.token);
  const orders = useAppStore((state) => state.orders) || [];
  const actionGetOrderByUser = useAppStore((state) => state.actionGetOrderByUser);

  useEffect(() => {
    if (user && user.id && token) {
      actionGetOrderByUser(user.id, token);
    }
  }, [user, token, actionGetOrderByUser]);

  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      <div className="flex flex-col gap-4">
        {orders.length === 0 && (
          <div className="text-center text-gray-500">No orders found</div>
        )}
        {orders.map((order) => {
          let addressObj = null;
          try {
            addressObj = JSON.parse(order.address);
          } catch {
            addressObj = null;
          }
          return (
            <div key={order.id} className="p-4 border rounded-lg shadow bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <span className="font-semibold">Order No.:</span> #{order.id}
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusMap[order.orderStatus]?.color || 'bg-gray-100 text-gray-800'}`}>{statusMap[order.orderStatus]?.label || 'Unknown status'}</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-2">Date: {new Date(order.createdAt).toLocaleString('en-US')}</div>
              <div className="mb-2">
                <span className="font-semibold">Shipping Address:</span> {addressObj ? (
                  <>
                    {addressObj.fullName} ({addressObj.phone})<br/>
                    {addressObj.address} Sub-district {addressObj.subDistrict}, District {addressObj.district}, Province {addressObj.province} {addressObj.postcode}
                  </>
                ) : order.address}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Products:</span>
                <ul className="list-disc ml-6">
                  {order.products && order.products.map((po) => (
                    <li key={po.id}>
                      {po.product?.name || 'Product name not found'}
                      {po.final_price_product ? ` (${po.final_price_product.toLocaleString()} Baht)` : ''}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="font-semibold text-right text-green-700">Total: {order.total_price?.toLocaleString()} Baht</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ListOrder;
