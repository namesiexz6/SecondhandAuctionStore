import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import useAppStore from '../store/AppStore'
import Logo from '../assets/Logo.png' // Assuming you have a react logo in your assets folder
import { io } from 'socket.io-client'
import { toast } from 'react-toastify'


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Shop', href: '/shop', current: false },
]
const navigationUser = [
  { name: 'My Auctions', href: '/user/my-auctions', current: false },
  { name: 'Cart', href: '/user/cart', current: false },
  { name: 'My Orders', href: '/user/my-order', current: false },

]


export default function NavUser() {
  const user = useAppStore((state) => state.user);
  const cart = useAppStore((state) => state.carts);
  const order = useAppStore((state) => state.orders);
  const setCarts = useAppStore((state) => state.setCarts);
  const logout = useAppStore((state) => state.logout);


  React.useEffect(() => {
    if (!user || !user.id) return;
    
    const socket = io(import.meta.env.VITE_SOCKET_URL, {
      transports: ['websocket']
    });

    socket.emit('userLoggedIn', user.id);

    const handleCartUpdated = (data) => {
      setCarts(data.cartItems);
      toast.success(data.message);
    };

    socket.on('cartUpdated', handleCartUpdated);

    // cleanup function: disconnect socket และลบ listener
    return () => {
      socket.off('cartUpdated', handleCartUpdated);
      socket.emit('userLoggedOut', user.id);
      socket.disconnect();
    };
  }, [user, setCarts]);

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full z-150 bg-gray-800 sticky">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center sm:justify-between">
          {/* Hamburger for mobile */}
          <div className="flex sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              {({ open }) => (
                open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )
              )}
            </DisclosureButton>
          </div>
          <div className="flex shrink-0 items-center mr-2 sm:mr-10">
            <Link to="/">
              <img
                alt="Your Company"
                src={Logo}
                className="h-8 w-auto rounded-md"
              />
            </Link>
          </div>
          {/* Main navigation for desktop */}
          <div className="hidden sm:flex items-center space-x-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                }
              >
                {item.name}
              </NavLink>
            ))}
            {user ? (
              navigationUser.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium relative" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium relative"
                  }
                >
                  {item.name}
                  {item.name === 'Cart' && cart && cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">{cart.length}</span>
                  )}
                  {item.name === 'My Orders' && order && order.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">{order.length}</span>
                  )}
                </NavLink>
              ))
            ) : null}
          </div>

          {/* User menu or login/register */}
          <div className="hidden sm:flex items-center ml-auto">
            {user ? (
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <div className="flex items-center ml-4">
                <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login</Link>
                <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <DisclosurePanel as={React.Fragment} className="sm:hidden">
        {({ close }) => (
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium block" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                }
                onClick={() => close()}
              >
                {item.name}
              </NavLink>
            ))}
            {user ? (
              navigationUser.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium block relative" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium block relative"
                  }
                  onClick={() => close()}
                >
                  {item.name}
                  {item.name === 'Cart' && cart && cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">{cart.length}</span>
                  )}
                  {item.name === 'My Orders' && order && order.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">{order.length}</span>
                  )}
                </NavLink>
              ))
            ) : null}
            {/* User menu or login/register for mobile */}
            <div className="mt-2">
              {user ? (
                <button
                  onClick={() => { logout(); close(); }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md"
                >
                  Sign out
                </button>
              ) : (
                <div className="flex flex-col gap-1">
                  <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium block" onClick={() => close()}>Login</Link>
                  <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium block" onClick={() => close()}>Register</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </DisclosurePanel>
    </Disclosure>
  )
}