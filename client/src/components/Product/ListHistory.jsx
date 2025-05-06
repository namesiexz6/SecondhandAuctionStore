import React from 'react'
import CountdownTime from './CountdownTime'

const ListHistory = () => {
  // ตัวอย่างข้อมูลสินค้าที่ user เคยประมูล
  const myBids = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://picsum.photos/200',
      auctionEnd: '2025-05-02T18:00:00Z',
      currentBid: 1999,
      myBid: 1999,
      highestBidder: true,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://picsum.photos/200',
      auctionEnd: '2025-04-30T18:00:00Z',
      currentBid: 2599,
      myBid: 2500,
      highestBidder: false,
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://picsum.photos/200',
      auctionEnd: '2025-05-03T12:00:00Z',
      currentBid: 1000,
      myBid: 1000,
      highestBidder: true,
    },
    {
        id: 4,
        name: 'Product 4',
        image: 'https://picsum.photos/200',
        auctionEnd: '2025-04-30T18:00:00Z',
        currentBid: 1000,
        myBid: 1000,
        highestBidder: true,
      },
  ];

  // ฟังก์ชันเช็คว่ายังประมูลอยู่หรือหมดเวลาแล้ว
  const getStatus = (auctionEnd, highestBidder) => {
    const now = new Date();
    const end = new Date(auctionEnd);
    if (now < end) return { label: 'กำลังร่วมประมูล', color: 'bg-yellow-100 text-yellow-800' };
    if (highestBidder) return { label: 'ชนะ', color: 'bg-green-100 text-green-800' };
    return { label: 'แพ้', color: 'bg-red-100 text-red-800' };
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      <h2 className="text-xl font-bold mb-4">ประวัติการประมูลของฉัน</h2>
      <div className="flex flex-col gap-4">
        {myBids.map((product) => {
          const status = getStatus(product.auctionEnd, product.highestBidder);
          return (
            <div key={product.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg shadow bg-white">
              <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
              <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex-1">
                  <div className="font-semibold text-base sm:text-lg">{product.name}</div>
                  <div className="text-xs text-gray-500 mt-1">Time left: <span className="text-red-500 font-semibold"><CountdownTime endTime={product.auctionEnd} /></span></div>
                  <div className="text-xs text-gray-500 mt-1">Current bid: <span className="text-green-600 font-semibold">{product.currentBid.toLocaleString()} บาท</span></div>
                  <div className="text-xs text-gray-500 mt-1">Your bid: <span className="font-semibold">{product.myBid.toLocaleString()} บาท</span></div>
                </div>
                <div className="flex flex-col items-center sm:items-end">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${status.color}`}>{status.label}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListHistory;