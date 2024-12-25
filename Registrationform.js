import { useState } from "react"


export default function Registrationform(props) {

   const [customer,setcustomer]=useState(props.data)
   let channgeRegis=(e)=>{
    const {name,value}=e.target;
    setcustomer({...customer,[name]:value})
    console.log(customer)
   }    
   console.log(customer.name)
    return (
        <>
            <div className="form-overlay">

                <div style={{ textAlign: 'center',width:340,height:500,backgroundColor:'white',paddingLeft:20,paddingTop:10,borderRadius:10}}>
                    <h5>Register Now</h5>
                    <div className="form-floating mb-3 mt-3">
                        <input typeof="text" className="form-control" id="user" placeholder="name@example.com" style={{ width: 300 }} name='name' defaultValue={customer.name} onChange={channgeRegis} />
                        <label htmlFor="floatingInput">Enter your Name </label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input typeof="email" className="form-control" id="user" placeholder="name@example.com" style={{ width: 300 }}  name='email' defaultValue={customer.email} onChange={channgeRegis}/>
                        <label htmlFor="floatingInput">Email </label>
                    </div>
                    <div className="form-floating">
                        <input typeof="password" className="form-control" id="password" placeholder="Password" style={{ width: 300 }}  name='password' defaultValue={customer.password} onChange={channgeRegis} />
                        <label htmlFor="floatingPassword"> Create Password</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input typeof="number" className="form-control" placeholder="name@example.com" style={{ width: 300 }}  name='phone_no' defaultValue={customer.phone_no} onChange={channgeRegis}/>
                        <label htmlFor="floatingInput">Enter Your Mobile Number </label>
                    </div>
                    <div class="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ width: 300,height:100 }}  name='address' defaultValue={customer.address}  onChange={channgeRegis}></textarea>
                        <label htmlFor="floatingTextarea">Address</label>
                    </div>
                    <div style={{display:"flex",gap:4,justifyContent:"center",marginRight:20}}>
                    <button className='btn btn-danger mt-2' style={{width:180}} onClick={(e)=>{
                        e.preventDefault()
                        props.closeregister()
                    }}>Cancel</button>
                    <button className='btn btn-warning  mt-2 '  style={{width:180}} onClick={(e)=>{
                         e.preventDefault()
                        props.addCustomers(customer)
                    }}>submit</button>
                    </div>
                </div>
            </div>
           
        </>
    )
}