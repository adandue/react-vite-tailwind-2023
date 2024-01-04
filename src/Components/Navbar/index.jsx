import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-black text-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink
                    to='/'
                    >
                    Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/'
                    onClick={() => context.setSearchByCategory()}
                    className={( {isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >
                    All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/jewelery'
                    onClick={() => context.setSearchByCategory('jewelery')}
                    className={( {isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >
                    Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={( {isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >
                    Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/mens-clothing'
                    onClick={() => context.setSearchByCategory("men's clothing")}
                    className={( {isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >
                    Men's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/womens-clothing'
                    onClick={() => context.setSearchByCategory("women's clothing")}
                    className={( {isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >
                    Women's clothing
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    mail@example.com
                </li>
                <li>
                    <NavLink
                    to='/my-orders'
                    className={( {isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >
                    My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/my-account'
                    className={( {isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >
                    My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/sing-in'
                    className={( {isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >
                    Sing In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-white' /> 
                    <div>
                    {context.cartProducts.length}
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export { Navbar };