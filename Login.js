import { useState, useEffect } from 'react'
import './logindiv.css'
import Routing from './Routing'
//import { useNavigate} from 'react-router-dom'
import Adminpanel from './Adminpanel'
import { getcustomer, postCustomer } from './Api'
import Registrationform from './Registrationform'
export default function Login() {


    let [customername, setcustomername] = useState("")
    let [customerid, setcustomerid] = useState(0)
    let [showheader, setshowHeader] = useState([{}])
    let [openHeader, setOpenHeader] = useState(false)
    let [openadmin, setOpenadmin] = useState(false)
    let [errormessage, seterrormessage] = useState(false)
    let [Customeremail, setCustomeremail] = useState("")
    let [Customerpassword, setCustomerpassword] = useState("")
    let [customer, setCustomer] = useState([])
    let [openRegister, setRegistration] = useState(false)
    let [initialForm] = useState({
        name: '', email: '', password: '', phone_no: '', address: ''
    })


    let getCustomer = async () => {
        let res = await getcustomer()
        setCustomer(res.data)

    }
    useEffect(() => {
        getCustomer()
    }, [])

    // console.log(customer);
    // console.log(Customeremail);

    let login = () => {

        if (Customeremail === "admin@gmail.com" && Customerpassword === "password") {
            setOpenadmin(true)
            seterrormessage(true)
        }
        else {
            let s = [{}]
            let p = [{}]
            s = customer.filter(data => (
                data.email === Customeremail

            ))
            p = s.filter(data => (
                data.password === Customerpassword

            ))
            //
            let c = p[0]?.customer_id;
            let r = p[0]?.name;
            setcustomername(r)
            // console.log(c);
            setcustomerid(c)
            setshowHeader(p)
            if (!(p.length === 0)) {
                setOpenHeader(true)
            }

        }
    }
  

    // console.log(customerid);
    if (openadmin) {
        return <Adminpanel />

    }

    if (openHeader) {
        return <Routing customerid={customerid} customername={customername} />
    }

    let showRegis = () => {
        setRegistration(true)
    }
    let closeRegis = () => {
        setRegistration(false)
    }
    let addCustomers = async (data) => {
        await postCustomer(data)
        getCustomer()
        setRegistration(false)

    }
    return (
        <>

        <div className='title'>
        foodkart
        
        </div>
        <div className='quote'>
        foodkart brings the people and <br/>
        Delicious Food
         together like nothing...
        </div>
        
        <div className='divs'>
            <div className="logindiv" >
                <div className='customerlogin' style={{ textAlign: 'center' }}>
                    <h5>Login</h5>
                    <div className="form-floating mb-3 mt-3">
                        <input type="email" className="form-control" id="user" placeholder="name@example.com" style={{ width: 300 }}
                            value={Customeremail}
                             onChange={
                                (e) => { setCustomeremail(e.target.value) }}
                            required />

                        <label htmlFor="floatingInput">Email </label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password" style={{ width: 300 }}
                            value={Customerpassword}
                            onChange={
                                (e) => { setCustomerpassword(e.target.value) }}
                        />
                        <label htmlFor="floatingPassword">Password</label>

                    </div>
                    {
                        errormessage ? <span style={{ color: 'red' }}>you entered Incorrect email or password</span> : null
                    }

                    {
                        showheader.length === 0 ? <span style={{ color: 'red' }}>you entered Incorrect email or password</span> : null
                    }
                    <button className='btn btn-secondary  btn-lg btn-block' style={{ marginTop: 10, width: 300,backgroundColor:'#FF6347' }} onClick={() => {
                        login()

                    }}>submit</button>
                    <button className='btn btn-light  btn-block' style={{ marginTop: 10, width: 300 }} onClick={() => {
                        showRegis()
                    }}
                    >Register Now!!</button>




                </div>
                </div>
            </div>
            {
                openRegister && <Registrationform closeregister={closeRegis} data={initialForm} addCustomers={addCustomers} />
            }

        </>
    )
}
