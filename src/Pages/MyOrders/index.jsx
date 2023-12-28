import { useContext } from "react"
import { Link } from 'react-router-dom'
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import { OrdersCard } from "../../Components/OrdersCard"

const MyOrders = () => {
    const context = useContext(ShoppingCartContext)
return (
    <>
        <Layout>
        <div className="flex items-center w-80 relative justify-center">
            <h1>My Orders</h1>
        </div>
        
        {
            context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard 
                        totalPrice = {order.totalPrice} 
                        totalProducts = {order.totalProducts} />
                </Link>
            ))
        }
        </Layout>
        
    </>
    )
}

export { MyOrders }