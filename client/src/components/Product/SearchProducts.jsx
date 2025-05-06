import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import useAppStore from "../../store/AppStore";


const SearchSidebar = ({ onMobileSubmit }) => {
    const [text, setText] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [price, setPrice] = useState([0, 100000]);

    // ดึง categories และ action จาก store
    const categories = useAppStore((state) => state.categories);
    const actionGetAllCategories = useAppStore((state) => state.actionGetAllCategories);
    const actionSearchProduct = useAppStore((state) => state.actionSearchProduct);

    useEffect(() => {   
            actionGetAllCategories();    
    }, []);

    const handleCategoryChange = (e) => {
        const value = Number(e.target.value);
        setSelectedCategories((prev) =>
            prev.includes(value)
                ? prev.filter((id) => id !== value)
                : [...prev, value]
        );
    };

    const handlePriceChange = (val) => setPrice(val);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // เรียกค้นหาจริง
        console.log("Search with filters:", {
            search: text,
            category_id: selectedCategories.length > 0 ? selectedCategories : undefined,
            priceRange: price,
        });
        await actionSearchProduct({
            search: text,
            category_id: selectedCategories.length > 0 ? selectedCategories : undefined,
            priceRange: price,
        });
        if (onMobileSubmit) {
            onMobileSubmit();
        }
    };

    return (
        <form className="p-4 bg-white rounded shadow w-full" onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold mb-4">ค้นหาสินค้า</h2>
            {/* Search by Text */}
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="ค้นหาสินค้า..."
                className="border rounded w-full mb-4 px-2 py-1"
            />

            {/* Search by Category */}
            <div className="mb-4">
                <h3 className="font-medium mb-2">หมวดหมู่</h3>
                {categories && categories.length > 0 ? (
                    categories.map((cat) => (
                        <label key={cat.id} className="flex items-center mb-1">
                            <input
                                type="checkbox"
                                value={cat.id}
                                checked={selectedCategories.includes(cat.id)}
                                onChange={handleCategoryChange}
                                className="mr-2"
                            />
                            {cat.name}
                        </label>
                    ))
                ) : (
                    <div>กำลังโหลดหมวดหมู่...</div>
                )}
            </div>

            {/* Search by Price */}
            <div>
                <h3 className="font-medium mb-2">ช่วงราคา</h3>
                <div className="flex items-center justify-between text-sm mb-2 gap-2">
                    <input
                        type="number"
                        min={0}
                        max={price[1]}
                        value={price[0]}
                        onChange={e => {
                            const val = Math.max(0, Math.min(Number(e.target.value), price[1]));
                            setPrice([val, price[1]]);
                        }}
                        className="border rounded w-20 px-2 py-1"
                    />
                    <span>—</span>
                    <input
                        type="number"
                        min={price[0]}
                        max={100000}
                        value={price[1]}
                        onChange={e => {
                            const val = Math.min(100000, Math.max(Number(e.target.value), price[0]));
                            setPrice([price[0], val]);
                        }}
                        className="border rounded w-20 px-2 py-1"
                    />
                </div>
                <Slider
                    range
                    min={0}
                    max={100000}
                    value={price}
                    onChange={handlePriceChange}
                />
            </div>
          
                <button type="submit" className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold">ค้นหา</button>
           
        </form>
    );
};

export default SearchSidebar;
