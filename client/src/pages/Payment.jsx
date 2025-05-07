import React from 'react'
import UserAdress from '../components/Payment/UserAdress'
import UserOrder from '../components/Payment/UserOrder'
import MethodPayment from '../components/Payment/MethodPayment'
import useAppStore from '../store/AppStore';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const cartsForPayment = useAppStore((state) => state.cartsForPayment) || [];
    const user = useAppStore((state) => state.user);
    const token = useAppStore((state) => state.token);
    const createOrder = useAppStore((state) => state.actionCreateOrder);
    const navigate = useNavigate();

    // ดึง address และ phone จาก user (address เป็น JSON string)
    //let addressStr = '-';
    let phoneStr = user?.phone || '-';
    if (user?.address) {
        try {
            const addrObj = typeof user.address === 'string' ? JSON.parse(user.address) : user.address;
            //addressStr = `${addrObj.address || ''} ${addrObj.subDistrict || ''} ${addrObj.district || ''} ${addrObj.province || ''} ${addrObj.postcode || ''}`.replace(/  +/g, ' ').trim();
            phoneStr = addrObj.phone ;
        } catch {
            console.error('Error parsing address JSON:', user.address);
        }
    }

    const handlePayNow = async () => {
        try {
            const totalPrice = cartsForPayment.reduce((sum, cart) => sum + (cart.final_price_product || 0), 0);
            const orderData = {
                user_id: user.id,
                orderStatus: 1, // pending
                total_price: totalPrice, // รวมราคาสินค้าทั้งหมด
                paymentType: 1, // 1 = COD
                address: user.address,
                phone: phoneStr,
                products: cartsForPayment.map(cart => ({
                    product_id: cart.product_id,
                    final_price_product: cart.final_price_product
                }))
            };
            await createOrder(orderData, token);
            // ไปหน้า success หรือแจ้งเตือน
            alert('สร้างออเดอร์สำเร็จ!');
            navigate('/'); // เปลี่ยนเส้นทางไปยังหน้าที่ต้องการหลังจากสร้างออเดอร์สำเร็จ
            // หรือ navigate('/user/orders');
        } catch (err) {
            alert('เกิดข้อผิดพลาดในการสร้างออเดอร์: ' + err.message);
        }
    };

    return (
        <div className='w-full p-4 pb-16'>
            <div>
                <UserAdress />
            </div>
            <div className='my-2'>
                <UserOrder />
            </div>
            <div>
                <MethodPayment />
            </div>
            <div className='flex justify-center my-4 max-w-xl mx-auto'>
                <button className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded w-[70%]' onClick={handlePayNow}>Pay Now</button>
                <button className='bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded w-[30%] ml-2'>Cancel</button>
            </div>
        </div >
    )
}

export default Payment