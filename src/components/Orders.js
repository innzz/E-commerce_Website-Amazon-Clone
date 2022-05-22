import React, { useState ,useEffect } from 'react';
import './Orders.css';
import Order from './Order';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';

function Orders() {
    // eslint-disable-next-line
    const [{basket,user}, dispatch] = useStateValue();
    const [orders,setOrders] = useState();

    useEffect(() => {
        if(user){
            db.collection('users').doc(user?.uid).collection('orders').orderBy('created','desc').onSnapshot(snapshot=>(
                setOrders(snapshot.docs.map((doc,index) => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }
        else{
            setOrders([]);
        }
    }, [user])
    

  return (
    <div className='orders'>
        <h1>Your Orders</h1>

        <div className="orders_order">
            {orders?.map((order,index) => (
                <Order key={index} order={order}/>
            ))}
        </div>
    </div>
  )
}

export default Orders