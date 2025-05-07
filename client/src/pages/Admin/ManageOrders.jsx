import React, { useEffect } from "react";
import useAppStoreAdmin from "../../store/AppStoreAdmin";

const statusMap = {
    0: { label: "รอดำเนินการ", color: "bg-yellow-100 text-yellow-800" },
    1: { label: "ชำระเงินแล้ว", color: "bg-blue-100 text-blue-800" },
    2: { label: "จัดส่งแล้ว", color: "bg-indigo-100 text-indigo-800" },
    3: { label: "สำเร็จ", color: "bg-green-100 text-green-800" },
    4: { label: "ยกเลิก", color: "bg-red-100 text-red-800" },
};
const paymentMap = {
    0: "โอนเงิน",
    1: "เก็บเงินปลายทาง",
};

const ManageOrders = () => {
    const { token, orders, actionGetAllOrders, actionUpdateOrderStatus, actionDeleteOrder } = useAppStoreAdmin();

    useEffect(() => {
        if (token) {
            actionGetAllOrders(token);
        }
    }, [token]);

    const handleStatusChange = (orderId, newStatus) => {
        if (token) {
            actionUpdateOrderStatus(orderId, newStatus, token);
        }
    };

    const handleDeleteOrder = (orderId) => {
        if (window.confirm("ยืนยันการลบออเดอร์นี้?")) {
            actionDeleteOrder(orderId, token);
        }
    };

    return (
        <div className="max-w-full mx-auto my-10 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">จัดการออเดอร์</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full bg-white text-sm">
                    <thead>
                        <tr className="bg-gradient-to-r from-indigo-100 to-blue-100 text-gray-700">
                            <th className="py-3 px-4 text-left font-semibold">Order ID</th>
                            <th className="py-3 px-4 text-left font-semibold">ชื่อผู้ใช้</th>
                            <th className="py-3 px-4 text-center font-semibold">สถานะ</th>
                            <th className="py-3 px-4 text-center font-semibold">ยอดรวม</th>
                            <th className="py-3 px-4 text-left font-semibold">ที่อยู่</th>
                            <th className="py-3 px-4 text-center font-semibold">เบอร์โทร</th>
                            <th className="py-3 px-4 text-center font-semibold">ชำระเงิน</th>
                            <th className="py-3 px-4 text-left font-semibold">สินค้า</th>
                            <th className="py-3 px-4 text-center font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.length > 0 ? (
                            orders.map((order, idx) => (
                                <tr key={order.id} className="hover:bg-blue-50 transition">
                                    <td className="py-2 px-4">{order.id}</td>
                                    <td className="py-2 px-4">{order.user?.username || '-'}</td>
                                    <td className="py-2 px-4 text-center">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusMap[order.orderStatus]?.color}`}>{statusMap[order.orderStatus]?.label}</span>
                                        <select
                                            className="ml-2 border rounded px-2 py-1 text-xs bg-gray-50"
                                            value={order.orderStatus}
                                            onChange={e => handleStatusChange(order.id, e.target.value)}
                                        >
                                            {Object.entries(statusMap).map(([val, obj]) => (
                                                <option key={val} value={val}>{obj.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                    <td className="py-2 px-4 text-center">{order.total_price}</td>
                                    <td className="py-2 px-4">{order.address}</td>
                                    <td className="py-2 px-4 text-center">{order.phone}</td>
                                    <td className="py-2 px-4 text-center">
                                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                                            {paymentMap[order.paymentType] || '-'}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4">
                                        {order.products?.map((po) => (
                                            <div key={po.id} className="mb-1">
                                                <span className="font-medium">{po.product?.name}</span>
                                                <span className="ml-2 text-xs text-gray-500">({po.final_price_product}฿)</span>
                                            </div>
                                        ))}
                                    </td>
                                    <td className="py-2 px-4 text-center">
                                        <button
                                            onClick={() => handleDeleteOrder(order.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs shadow transition"
                                        >ลบ</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="9" className="text-center py-4 text-gray-400">ไม่มีข้อมูลออเดอร์</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
