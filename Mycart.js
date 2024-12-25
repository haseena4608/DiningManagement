import { useEffect, useState } from "react";
import { getFood, getcart } from "./Api"
import Orders from "./Orders";
import AddItems from "./AddItems";
import { deletecart } from "./Api";
export default function Mycart() {
    let [Food, setFood] = useState([])
    let [opencart, setopencart] = useState(false)
    let [openOrders, setopenOrders] = useState(false)



    let getfood = async () => {
        let res = await getcart()
        setFood(res.data)
    }
    useEffect(() => {
        getfood()
    }, [Food])

    let deleteCart = async (id) => {
        await deletecart(id)
        getFood()
    }


    let mycart = () => {
        setopencart(true)
    }
    if (opencart) {
        return <AddItems />
    }

    let myorders = () => {
        setopenOrders(true)
    }
    if (openOrders) {
        return <Orders />
    }

    
    return (<>
        <div style={{ position: "absolute", marginTop: 4, marginBottom: 2, display: "flex", flexDirection: "row", gap: 6, left: 400 }}>
             <h3 style={{position:"absolute",left:100,marginTop:10}}>Review your added  <span style={{ color: 'red',  position: 'absolute' ,marginLeft:10}}>Items</span></h3>
            <button className="btn  btn-lg btn-block" style={{ marginTop: 50, width: 300, backgroundColor:"#FF6347",color:"white" }} onClick={mycart} >Add More</button>
            <button className="btn btn-warning btn-lg btn-block" style={{ marginTop: 50, width: 300 }} onClick={myorders}>Orders</button>
            
        </div>
        <div className='row' style={{ marginTop: 60, marginLeft:20 }}>

            {
                Food.length===0?<span style={{position:'relative',top:250,fontSize:40,color:"grey",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}}>Your Cart is Empty</span>:
            
            
                Food.map((data) => (

                    <div className='col-2 ' style={{ marginTop: 120 }} key={data.cart_id} >
                        <div className='card mb-3'>
                            <div className='card-header bg-dark-subtle'><span style={{ fontWeight: 'bold', fontSize: 20 }}>{data.food.food_name}</span></div>
                            <div className='card-body'>
                                <h5 className='card-title'>food ID: {data.food.food_id}</h5>
                                <p className='card-text'>Price: {data.food.price}</p>
                                <button className="btn btn-danger  " style={{ marginTop: 10 }} onClick={() => {
                                    deleteCart(Food[0].cart_id)
                                }}>Delete From Cart</button>
                            </div>

                        </div>

                    </div>

                                

        ))
                        }

    </div >

            </>
    )
}