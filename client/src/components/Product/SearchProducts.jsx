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
        <form className="p-4 bg-white rounded shadow w-full text-sm md:text-base" onSubmit={handleSubmit}>
            <h2 className="text-base md:text-lg font-semibold mb-4">Product Search</h2>
            {/* Search by Text */}
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Search for products..."
                className="border rounded w-full mb-4 px-2 py-1 text-xs md:text-sm lg:text-base"
            />

            {/* Search by Category */}
            <div className="mb-4">
                <h3 className="font-medium mb-2 text-sm md:text-base">Category</h3>
                {categories && categories.length > 0 ? (
                    categories.map((cat) => (
                        <label key={cat.id} className="flex items-center mb-1 text-xs md:text-sm lg:text-base">
                            <input
                                type="checkbox"
                                value={cat.id}
                                checked={selectedCategories.includes(cat.id)}
                                onChange={handleCategoryChange}
                                className="mr-2 w-4 h-4 md:w-5 md:h-5"
                            />
                            {cat.name}
                        </label>
                    ))
                ) : (
                    <div className="text-xs md:text-sm">Loading categories...</div>
                )}
            </div>

            {/* Search by Price */}
            <div>
                <h3 className="font-medium mb-2 text-sm md:text-base">Price Range</h3>
                <div className="flex items-center justify-between text-xs md:text-sm mb-2 gap-2">
                    <input
                        type="number"
                        min={0}
                        max={price[1]}
                        value={price[0]}
                        onChange={e => {
                            const val = Math.max(0, Math.min(Number(e.target.value), price[1]));
                            setPrice([val, price[1]]);
                        }}
                        className="border rounded w-16 md:w-20 px-2 py-1 text-xs md:text-sm"
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
                        className="border rounded w-16 md:w-20 px-2 py-1 text-xs md:text-sm"
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
            
            <button type="submit" className="mt-4 w-full py-2 bg-blue-700 hover:bg-blue-800 text-white rounded font-semibold text-sm md:text-base">Search</button>
        </form>
    );
};

export default SearchSidebar;
