import { XMarkIcon } from "@heroicons/react/24/solid";
import './styles.css'

const OrderCard = props => {
    const { title, imageUrl, price} = props
    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img src={imageUrl} alt={title} className='w-full h-full rounded-lg object-contain'/>
                </figure>
                <p className='text-sm font-light truncate object-contain pr-3'>{ title }</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{ price }</p>
                <XMarkIcon 
                className='h-6 w-6 text-gray-900 cursor-pointer' 
                // onClick={() => context.closeCheckoutSideMenu()}
                />
            </div>
        </div>
    );
}

export { OrderCard }