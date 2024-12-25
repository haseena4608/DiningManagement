import Footer from "./Footer";
import { useEffect, useState } from "react";
import { getorders } from "./Api";
import './Orders.css'
export default function Orders(props) {

let c = props.customerid

    const [customerId, setCustomerId] = useState('');
    const [orders, setOrders] = useState();

    useEffect(()=>{
        getOrder()
    },[orders])

let getOrder = async ()=>{
  let res =  await getorders()
  setOrders(res.data)
}

    const ordernow = async () => {
 const data = {

            customer: {
                customer_id: customerId
            }
        };
        await fetch('http://localhost:8080/dining/order/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        


    };
   
    console.log(orders)
    return (
        <>
        <div className="orders">
        <div style={{ position: "absolute", top: 30, left: 650, fontWeight:200, fontSize:40,fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }}>
        <p >
            order your items  with <br/>
                   one click only
        </p>
        
        </div>
            <div style={{ position: "absolute", top:5, left: 250 }}>
            <div>
            Your ID:{c}
        </div>
                <div className="form-floating mt-3" >
                    <input type="number" placeholder="text" className="form-control" style={{ width: 300 }} onChange={(event) => setCustomerId(event.target.value)} value={customerId} />
                    <label htmlFor="floatingPassword">Your ID</label>
                </div>
                <button className="btn  btn-lg btn-block" style={{ marginTop: 10, width: 300,backgroundColor:"#FF6347",color:"white" }} onClick={() => {
                    ordernow()
                }} >Order Here</button>
            </div>
            </div>

            <div style={{ position: "absolute", top: 260, left: 20, fontWeight:10, fontSize:30 }}>
        
            Your Orders will appear here
        
        </div>

           {
            orders?.map((data)=>( 
            <div key={data.order_id} className="receipt-container" style={{ position: "absolute", top: 320, display:"flex",flexDirection:"row",gap:10, height: 500,width:600 }}>
            <div class="container" >
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="invoice-title">
                                    <h4 class="float-end font-size-15"> <span class="badge bg-success font-size-12 ms-2">Order Placed</span></h4>
                                    <div class="mb-4">
                                        <h2 class="mb-1 text-muted">FoodKart.com</h2>
                                    </div>
                                    <div class="text-muted">
                                        <p class="mb-1">marina mall, egattur, chennai</p>
                                        <p class="mb-1"><i class="uil uil-envelope-alt me-1"></i>info@foodkart.com</p>
                                        <p><i class="uil uil-phone me-1"></i> 012-345-6789</p>
                                    </div>
                                </div>

                                <hr class="my-4" />

                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="text-muted">
                                            <h5 class="font-size-16 mb-3">Billed To:</h5>
                                            <h5 class="font-size-15 mb-2">{data.customer.name}</h5>
                                            <p class="mb-1">{data.customer.email}</p>
                                            <p class="mb-1">{data.customer.address}</p>
                                            <p>{data.customer.phone_no}</p>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="text-muted text-sm-end">
                                           
                                        <div class="mt-4">
                                                <h5 class="font-size-15 mb-1">price:</h5>
                                                
                                                <p>{data.totalprice}</p>
                                            </div>
                                            <div class="mt-4">
                                                <h5 class="font-size-15 mb-1">Order Date:</h5>
                                                
                                                <p>{data.orderdateandtime.split("T").splice(0)[0]}</p>
                                            </div>
                                            <div class="mt-4">
                                                <h5 class="font-size-15 mb-1">Order ID:</h5>
                                                <p>#{data.order_id}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>))
           }

            <Footer />
        </>
    )
}