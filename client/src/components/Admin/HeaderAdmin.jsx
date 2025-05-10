// rafce

import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import useAppStore from '../../store/AppStore';
import useAppStoreAdmin from '../../store/AppStoreAdmin';
import { useNavigate } from 'react-router-dom';

const HeaderAdmin = () => {
    const user = useAppStore((state) => state.user);
    const logout = useAppStoreAdmin((state) => state.logout);
    const logoutUser = useAppStore((state) => state.logout);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleLogout = () => {
        logoutUser();
        logout();
        navigate('/');
    };

    return (
        <header className='bg-white h-16 flex items-center px-6 justify-between shadow'>
            <div className="font-bold text-lg">Admin Panel</div>
            <div className="relative">
                <button
                    className="flex items-center gap-2 focus:outline-none"
                    onClick={() => setOpen((v) => !v)}
                >
                    <FaUserCircle className="text-2xl text-gray-600" />
                    <span className="font-medium text-gray-700">{user?.name || 'Admin'}</span>
                </button>
                {open && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50">
                        <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 border-t"
                            onClick={() => navigate('/')}
                        >
                            Go to user site
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default HeaderAdmin