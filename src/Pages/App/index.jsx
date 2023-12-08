import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import Home from '../home'

import './App.css'

function App() {

  return (
    <>
      <div className='bg-red-100'>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <NotFound />
      <SingIn />
      </div>
    </>
  )
}

export default App
