import { Fragment, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

let isInitial= true;


function App() {

  const showCart = useSelector(state => state.ui.cartIsVisible);

  const cart = useSelector(state=> state.cart);

  const notification = useSelector(state=> state.ui.notification);


  const dispatch = useDispatch();
  

  useEffect( () => {
  
    const sendCartData = async () => {

      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }))

      const response = await fetch('https://reactcg-http-default-rtdb.firebaseio.com/cart.json', { 
        method: 'PUT', 
        body: JSON.stringify(cart)
      })

      if(!response.ok){

        throw new Error('Sending cart data failed')

      }

      dispatch(uiActions.showNotification({
        status: 'Success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }))
  
      //const responseData= await response.json()

    }

    if(isInitial){
      isInitial=false;
      return;
    }
    
    sendCartData().catch((error) => {

      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'error',
        message: 'Sending cart data failed!'
      }))
    })

  },[cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
    </Layout>

    </Fragment>
    
  );
}

export default App;
