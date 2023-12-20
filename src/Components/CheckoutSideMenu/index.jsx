import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../OrderCard';
import './styles.css';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    console.log('Cart: ', context.cartProducts);
    // console.log('PRODUCT TO SHOW: ', context.productToShow)
    return(
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex-col fixed right-0 border bg-white border-black rounded-lg`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div>
                <XMarkIcon 
                className='h-6 w-6 text-gray-900 cursor-pointer' 
                onClick={() => context.closeCheckoutSideMenu()}
                />
            </div>
        </div>
        <div className=' px-6'>
        {
            context.cartProducts.map((product) => (
                <OrderCard 
                key={ product.id }
                title={ product.title } 
                imageUrl={ product.image } 
                price={ product.price } 
                />
            ))
        }
        </div>
        </aside>
    );
}

export { CheckoutSideMenu }