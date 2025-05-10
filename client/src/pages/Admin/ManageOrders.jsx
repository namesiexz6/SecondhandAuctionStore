import React, { useEffect } from "react";
import useAppStoreAdmin from "../../store/AppStoreAdmin";
import useAppStore from "../../store/AppStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const statusMap = {
    1: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
    2: { label: "Paid", color: "bg-blue-100 text-blue-800" },
    3: { label: "Shipped", color: "bg-indigo-100 text-indigo-800" },
    4: { label: "Completed", color: "bg-green-100 text-green-800" },
    5: { label: "Cancelled", color: "bg-red-100 text-red-800" },
};
const paymentMap = {
    1: "COD",
    2: "MasterCard",
};

const ManageOrders = () => {

    const token = useAppStore((state) => state.token);
    const orders = useAppStoreAdmin((state) => state.orders);
    const actionGetAllOrders = useAppStoreAdmin((state) => state.actionGetAllOrders);
    const actionUpdateOrderStatus = useAppStoreAdmin((state) => state.actionUpdateOrderStatus);
    const actionDeleteOrder = useAppStoreAdmin((state) => state.actionDeleteOrder);

    useEffect(() => {
        if (token) {
            actionGetAllOrders(token);
        }
    }, [token]);

    const handleStatusChange = async (orderId, newStatus) => {
        if (token) {
            try {
                await actionUpdateOrderStatus(orderId, newStatus, token);
                toast.success("Order status updated successfully");
            } catch (error) {
                toast.error("Failed to update order status" + error.message);
            }
        }
    };

    const handleDeleteOrder = async (orderId) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            try {
                await actionDeleteOrder(orderId, token);
                toast.success("Order deleted successfully");
            } catch (error) {
                toast.error("Failed to delete order" + error.message);
            }
        }
    };

    return (
        <div className="max-w-full mx-auto my-10 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Orders</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full bg-white text-sm">
                    <thead>
                        <tr className="bg-gradient-to-r from-indigo-100 to-blue-100 text-gray-700">
                            <th className="py-3 px-4 text-left font-semibold">ID</th>
                            <th className="py-3 px-4 text-left font-semibold">User Name</th>
                            <th className="py-3 px-4 text-center font-semibold">Status</th>
                            <th className="py-3 px-4 text-left font-semibold">Products</th>
                            <th className="py-3 px-4 text-center font-semibold">Total</th>
                            <th className="py-3 px-4 text-left font-semibold">Address</th>
                            <th className="py-3 px-4 text-center font-semibold">Payment</th>
                            <th className="py-3 px-4 text-center font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.length > 0 ? (
                            orders.map((order) => {
                                let addressObj = null;
                                try {
                                    addressObj = JSON.parse(order.address);
                                } catch {
                                    addressObj = null;
                                }
                                return (
                                    <tr key={order.id} className="hover:bg-blue-50 transition">
                                        <td className="py-2 px-4">{order.id}</td>
                                        <td className="py-2 px-4">{order.user?.name || '-'}</td>
                                        <td className="py-2 px-4 text-center">
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
                                        <td className="py-2 px-4">
                                            {order.products?.map((po) => (
                                                <div key={po.id} className="mb-1">
                                                    <span className="font-medium">{po.product?.name}</span>
                                                    <span className="ml-2 text-xs text-gray-500">({po.final_price_product}฿)</span>
                                                </div>
                                            ))}
                                        </td>
                                        <td className="py-2 px-4 text-center">{order.total_price}</td>
                                        <td className="py-2 px-4 text-left">
                                            {addressObj ? ( 
                                                <>
                                                    {addressObj.fullName} ({addressObj.phone})<br />
                                                    {addressObj.address} Sub-district: {addressObj.subDistrict}, District: {addressObj.district}, Province: {addressObj.province} {addressObj.postcode}
                                                </>
                                            ) : order.address}
                                        </td>
                                        <td className="py-2 px-4 text-center">
                                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                                                {paymentMap[order.paymentType] || '-'}
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 text-center">
                                            <button
                                                onClick={() => handleDeleteOrder(order.id)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs shadow transition"
                                            >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr><td colSpan="9" className="text-center py-4 text-gray-400">No order data</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
