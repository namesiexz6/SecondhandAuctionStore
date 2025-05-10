import React from 'react'
import UserAdress from '../components/Payment/UserAdress'
import UserOrder from '../components/Payment/UserOrder'
import MethodPayment from '../components/Payment/MethodPayment'
import useAppStore from '../store/AppStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Payment = () => {
    const cartsForPayment = useAppStore((state) => state.cartsForPayment) || [];
    const user = useAppStore((state) => state.user);
    const token = useAppStore((state) => state.token);
    const createOrder = useAppStore((state) => state.actionCreateOrder);
    const navigate = useNavigate();

    // Get address and phone from user (address is a JSON string)
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
                total_price: totalPrice, // total price of all products
                paymentType: 1, // 1 = COD
                address: user.address,
                phone: phoneStr,
                products: cartsForPayment.map(cart => ({
                    product_id: cart.product_id,
                    final_price_product: cart.final_price_product
                }))
            };
            await createOrder(orderData, token);
            // Go to success page or show notification
            toast.success('Order created successfully!');
            navigate('/user/my-order'); // Redirect to desired page after order success
            // or navigate('/user/orders');
        } catch (err) {
            toast.error('Failed to create order: ' + (err.message || 'Unknown error'));
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
                <button className='bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded w-[30%] ml-2' onClick={() => navigate(-1)}>Cancel</button>
            </div>
        </div >
    )
}

export default Payment