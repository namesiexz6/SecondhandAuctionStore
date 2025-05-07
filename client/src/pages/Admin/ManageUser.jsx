import React, { useEffect, useState } from 'react';
import useAppStoreAdmin from '../../store/AppStoreAdmin';
import useAppStore from '../../store/AppStore';

const ManageUser = () => {
    const users = useAppStoreAdmin((state) => state.users) || [];
    const token = useAppStore((state) => state.token);
    const actionGetAllUsers = useAppStoreAdmin((state) => state.actionGetAllUsers);
    const actionChangeUserRole = useAppStoreAdmin((state) => state.actionChangeUserRole);
    const actionDeleteUser = useAppStoreAdmin((state) => state.actionDeleteUser);

    const [editUserId, setEditUserId] = useState(null);
    const [editRole, setEditRole] = useState(0);
    const [editStatus, setEditStatus] = useState(true);

    useEffect(() => {
        if (token) {
            actionGetAllUsers(token);
        }
    }, [token, actionGetAllUsers]);

    const handleEdit = (user) => {
        setEditUserId(user.id);
        setEditRole(user.role);
        setEditStatus(user.enabled);
    };

    const handleCancel = () => {
        setEditUserId(null);
        setEditRole(0);
        setEditStatus(true);
    };

    const handleSave = (user) => {
        if (editRole === user.role && editStatus === user.enabled) {
            alert('ไม่มีการเปลี่ยนแปลงข้อมูล');
            return;
        }
        actionChangeUserRole(user.id, { role: editRole, enabled: editStatus }, token);
        setEditUserId(null);
        setEditRole(0);
        setEditStatus(true);
    };

    const handleDelete = (user) => {
        if (window.confirm('ยืนยันการลบผู้ใช้นี้?')) {
            actionDeleteUser(user.id, token);
        }
    };

    return (
        <div className="max-w-full mx-auto my-10 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">จัดการผู้ใช้</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full bg-white text-sm">
                    <thead>
                        <tr className="bg-gradient-to-r from-indigo-100 to-blue-100 text-gray-700">
                            <th className="py-3 px-4 text-left font-semibold">No.</th>
                            <th className="py-3 px-4 text-left font-semibold">ชื่อ</th>
                            <th className="py-3 px-4 text-left font-semibold">อีเมล</th>
                            <th className="py-3 px-4 text-center font-semibold">Role</th>
                            <th className="py-3 px-4 text-center font-semibold">Status</th>
                            <th className="py-3 px-4 text-center font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => (
                            <tr key={user.id} className="hover:bg-blue-50 transition">
                                <td className="py-2 px-4">{idx + 1}</td>
                                <td className="py-2 px-4 flex items-center gap-2">
                                    <span className="inline-flex w-8 h-8 rounded-full bg-gray-200 text-gray-500 justify-center items-center font-bold text-base leading-8 text-center">
                                        {user.name?.charAt(0).toUpperCase()}
                                    </span>
                                    <span>{user.name}</span>
                                </td>
                                <td className="py-2 px-4">{user.email}</td>
                                <td className="py-2 px-4 text-center">
                                    {editUserId === user.id ? (
                                        <select
                                            className="border rounded px-2 py-1 text-xs"
                                            value={editRole}
                                            onChange={e => setEditRole(Number(e.target.value))}
                                        >
                                            <option value={1}>Admin</option>
                                            <option value={2}>User</option>
                                        </select>
                                    ) : (
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${user.role === 1 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                            {user.role === 1 ? 'Admin' : 'User'}
                                        </span>
                                    )}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    {editUserId === user.id ? (
                                        <select
                                            className="border rounded px-2 py-1 text-xs"
                                            value={editStatus}
                                            onChange={e => setEditStatus(e.target.value === 'true')}
                                        >
                                            <option value={true}>เปิดใช้งาน</option>
                                            <option value={false}>ปิดใช้งาน</option>
                                        </select>
                                    ) : (
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${user.enabled ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'}`}>
                                            {user.enabled ? 'เปิดใช้งาน' : 'ปิดใช้งาน'}
                                        </span>
                                    )}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    {editUserId === user.id ? (
                                        <div className="flex gap-2 justify-center items-center">
                                            <button
                                                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-xs shadow transition"
                                                onClick={() => handleSave(user)}
                                            >
                                                ยืนยัน
                                            </button>
                                            <button
                                                className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-lg text-xs shadow transition"
                                                onClick={handleCancel}
                                            >
                                                ยกเลิก
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex gap-2 justify-center">
                                            <button
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-xs shadow transition"
                                                onClick={() => handleEdit(user)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs shadow transition"
                                                onClick={() => handleDelete(user)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;
