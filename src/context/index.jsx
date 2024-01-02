import { useEffect, createContext, useState } from 'react';
import { apiUrl } from "../api"

export const ShoppingCartContext = createContext ();

export const ShoppingCartProvider = ({children}) => {
    
    //Shopping Cart - Increment Quantity
    const [count, setCount] = useState(0);
    // console.log('COUNT: ', count);
    
    // Shopping Cart - Add Products to cart
    const [cartProducts, setCartProducts] = useState([]);
    
    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    
    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});
    
    //Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Shopping Cart order
    const [order, setOrder] = useState([]);

    // Get Products
    const [items, setItems] = useState(null);

    //Search products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/products`)
                const data = await response.json()
                setItems(data)
            } catch (error) {
                console.error(`Ocurrió un error: ${error}`);
            }
        }
        fetchData();
    }, []);

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}