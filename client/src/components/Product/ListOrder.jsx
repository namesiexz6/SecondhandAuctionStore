import React, { useEffect } from 'react';
import useAppStore from '../../store/AppStore';

const statusMap = {
  1: { label: 'กำลังดำเนินการ', color: 'bg-yellow-100 text-yellow-800' },
  2: { label: 'ส่งของแล้ว', color: 'bg-green-100 text-green-800' },
  3: { label: 'ยกเลิก', color: 'bg-red-100 text-red-800' },
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
      <h2 className="text-xl font-bold mb-4">รายการสั่งซื้อของฉัน</h2>
      <div className="flex flex-col gap-4">
        {orders.length === 0 && (
          <div className="text-center text-gray-500">ยังไม่มีรายการสั่งซื้อ</div>
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
                  <span className="font-semibold">เลขที่ออเดอร์:</span> #{order.id}
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusMap[order.orderStatus]?.color || 'bg-gray-100 text-gray-800'}`}>{statusMap[order.orderStatus]?.label || 'ไม่ทราบสถานะ'}</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-2">วันที่: {new Date(order.createdAt).toLocaleString('th-TH')}</div>
              <div className="mb-2">
                <span className="font-semibold">ที่อยู่จัดส่ง:</span> {addressObj ? (
                  <>
                    {addressObj.fullName} ({addressObj.phone})<br/>
                    {addressObj.address} ต.{addressObj.subDistrict} อ.{addressObj.district} จ.{addressObj.province} {addressObj.postcode}
                  </>
                ) : order.address}
              </div>
              <div className="mb-2">
                <span className="font-semibold">สินค้า:</span>
                <ul className="list-disc ml-6">
                  {order.products && order.products.map((po) => (
                    <li key={po.id}>
                      {po.product?.name || 'ไม่พบชื่อสินค้า'}
                      {po.final_price_product ? ` (${po.final_price_product.toLocaleString()} บาท)` : ''}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="font-semibold text-right text-green-700">ราคารวม: {order.total_price?.toLocaleString()} บาท</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ListOrder;
