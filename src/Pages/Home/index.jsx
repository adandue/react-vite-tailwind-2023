import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

const Home = () => {
const context = useContext(ShoppingCartContext)
const items = context.items


return (
    <>
        <Layout>
        <div className="flex items-center w-80 relative justify-center mb-6 text-2xl">
            <h1>Exclusive Products</h1>
        </div>
        <input 
            type='text' 
            placeholder='Search a product'
            className='rounded-lg border border-black w-80 p-4 mb-8 focus:outline-none'
            onChange={(event) => {
                context.setSearchByTitle(event.target.value)
            }}
            
            />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
            items?.map((item) => (
            <Card 
            key={item.id}
            data={item}
            />
            )
            )
        }
        </div>
        <ProductDetail />
        </Layout>
        
    </>
    )
}

export { Home }