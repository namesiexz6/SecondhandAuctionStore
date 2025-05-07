import React, { useEffect, useState } from 'react';
import useAppStoreAdmin from '../../store/AppStoreAdmin';
import useAppStore from '../../store/AppStore';

const ManageCategories = () => {
    const token = useAppStore((state) => state.token);
    const categories = useAppStoreAdmin((state) => state.categories) || [];
    const actionGetAllCategories = useAppStoreAdmin((state) => state.actionGetAllCategories);
    const actionCreateCategory = useAppStoreAdmin((state) => state.actionCreateCategory);
    const actionUpdateCategory = useAppStoreAdmin((state) => state.actionUpdateCategory);
    const actionDeleteCategory = useAppStoreAdmin((state) => state.actionDeleteCategory);

    const [newCategory, setNewCategory] = useState('');
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState('');

    useEffect(() => {
        actionGetAllCategories();
    }, [actionGetAllCategories]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newCategory.trim()) return;
        actionCreateCategory({ name: newCategory }, token);
        setNewCategory('');
    };

    const handleEdit = (cat) => {
        setEditId(cat.id);
        setEditName(cat.name);
    };

    const handleUpdate = (cat) => {
        if (!editName.trim()) return;
        actionUpdateCategory(cat.id, { name: editName }, token);
        setEditId(null);
        setEditName('');
    };

    const handleCancel = () => {
        setEditId(null);
        setEditName('');
    };

    const handleDelete = (cat) => {
        if (window.confirm('ยืนยันการลบหมวดหมู่นี้?')) {
            actionDeleteCategory(cat.id, token);
        }
    };

    return (
        <div className="max-w-full mx-auto my-10 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">จัดการหมวดหมู่</h2>
            <form onSubmit={handleAdd} className="flex gap-2 mb-6">
                <input
                    className="flex-1 border rounded px-3 py-2"
                    placeholder="เพิ่มหมวดหมู่ใหม่"
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value)}
                />
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" type="submit">เพิ่ม</button>
            </form>
            <table className="min-w-full bg-white text-sm border">
                <thead>
                    <tr className="bg-gradient-to-r from-indigo-100 to-blue-100 text-gray-700">
                        <th className="py-2 px-4 text-left font-semibold">#</th>
                        <th className="py-2 px-4 text-left font-semibold">ชื่อหมวดหมู่</th>
                        <th className="py-2 px-4 text-center font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cat, idx) => (
                        <tr key={cat.id} className="hover:bg-blue-50 transition">
                            <td className="py-2 px-4">{idx + 1}</td>
                            <td className="py-2 px-4">
                                {editId === cat.id ? (
                                    <input
                                        className="border rounded px-2 py-1 text-sm"
                                        value={editName}
                                        onChange={e => setEditName(e.target.value)}
                                    />
                                ) : (
                                    cat.name
                                )}
                            </td>
                            <td className="py-2 px-4 text-center">
                                {editId === cat.id ? (
                                    <>
                                        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs mr-2" onClick={() => handleUpdate(cat)}>ยืนยัน</button>
                                        <button className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs" onClick={handleCancel}>ยกเลิก</button>
                                    </>
                                ) : (
                                    <>
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs mr-2" onClick={() => handleEdit(cat)}>Edit</button>
                                        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs" onClick={() => handleDelete(cat)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageCategories;
