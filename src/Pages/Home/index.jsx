import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

const Home = () => {
const context = useContext(ShoppingCartContext)
const renderView = () => {
    if (context.filteredItems?.length > 0) {
        return (
        context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
        ))
        )
    } else {
        return (
        <div>No results found</div>
        )
    }
    }



return (
    <>
        <Layout>
        <div className="flex items-center w-80 relative justify-center mb-6">
            <h1 className='font-medium text-xl'>Exclusive Products</h1>
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
            {renderView()}
        </div>
        <ProductDetail />
        </Layout>
    </>
    )
}

export { Home }