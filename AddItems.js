import { useState } from 'react'
import './Additems.css'
//import { postcart } from './Api'
import Footer from './Footer'
import Mycart from './Mycart'

export default function AddItems({ customerid }) {

  let c = customerid
  // console.log(c);
  let [opencart, setopencart] = useState(false)
  let [message, setmessage] = useState(false)
  const [quantity, setQuantity] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [foodId, setFoodId] = useState('');


  // const [postCart, setpostCart] = useState({


  //      quantity: quantity,
  //     customer: { 
  //         customer_id: customerId
  //     },
  //     food: { 
  //         food_id: foodId 
  //     }

  //  })


  const addCart = async (event) => {


    const data = {
      quantity,
      customer: {
        customer_id: customerId
      },
      food: {
        food_id: foodId
      }
    };
    await fetch('http://localhost:8080/dining/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    setmessage(true)

  };



  // let channgecart = (e) => {
  //     const { name, value } = e.target;
  //     setpostCart({...postCart, [name]: value })

  // }

  // setpostCart(...postCart,[]:)

  // let addCart = async (postCart) => {

  //    await postcart(postCart)}


  let mycart = () => {
    setopencart(true)
  }
  if (opencart) {
    return <Mycart />
  }

  return (
    <>


      <h3 className='mains'>Add your favourites <i style={{ color: 'red', left: '103%', position: 'absolute' }}> ASAP!</i></h3>

      <div className='main'>
        <h6 style={{ marginTop: 10 }}>Your ID :{c}</h6>

        <div className="form-floating mb-3 mt-2">
          <input type="number" placeholder="text" className="form-control" style={{ width: 300 }} onChange={(event) => setCustomerId(event.target.value)} value={customerId} />
          <label htmlFor="floatingPassword">Your ID</label>
        </div>
        <div className="form-floating mb-3">
          <input type="number" className="form-control" id="password" placeholder="text" name='quantity' style={{ width: 300 }} value={quantity} onChange={(event) => setQuantity(event.target.value)} />
          <label htmlFor="floatingPassword">Quantity</label>
        </div>


        <div className="form-floating mb-3">
          <input type="number" className="form-control" placeholder="text" name='food_id' style={{ width: 300 }} onChange={(event) => setFoodId(event.target.value)} value={foodId} />
          <label htmlFor="floatingPassword">Food ID</label>
        </div>

        {message && <span>Your Items are successfully Added</span>}

        <button className="btn  btn-lg btn-block" style={{ marginTop: 10, width: 300,backgroundColor:"#FF6347",color:'white' }} onClick={() => (addCart())}>Add to Cart</button>
        <button className="btn btn-warning btn-lg btn-block" style={{ marginTop: 10, width: 300 }} onClick={() => {
          mycart()
        }}>my cart</button>
      </div>
      <Footer />
    </>
  )
}