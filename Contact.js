import Footer from "./Footer";
import './Contact.css'
import { postContact} from './Api'
import { useState } from "react";

export default function Contact() {

    let [contactmessage,setmessage]=useState(false)
    
    const [postcontact,setpostcontact] = useState({
        name : "",
       email :"",
       message :""
    })
    let channgecontact=(e)=>{
        const {name,value}=e.target;
        setpostcontact({...postcontact,[name]:value})
        console.log(postContact)
       }

    let addContact= async(data)=>{
        await postContact(postcontact)
        setmessage(true)
    }
   
    // const hangdleinput = (e)=>{
    //     setpostcontact({...postcontact,[event.target.name]:event.target.event})
    // }

    return (
        <>
            <img src="/contact21.jpg" alt='' style={{ width: 1272, height: 589 }} />
            <h5 className="heads">Your opinion Matters</h5>
            <div className="texting">
                <div className="form-floating bg-transparent text-light mb-3">
                    <input type="email" className="form-control bg-transparent" placeholder="name@example.com" style={{ width: 300 }}  name="name" value={postcontact.contactname} onChange={channgecontact}/>
                    <label htmlFor="floatingInput" style={{ fontFamily: "sans-serif", fontWeight: "lighter", fontSize: 20, }}>Name </label>
                </div>
                <div className="text bg-tranparent " style={{left:150}}>
                    <div className="form-floating bg-transparent text-light mb-3">
                        <input type="email" className="form-control bg-transparent" placeholder="name@example.com" style={{ width: 300 }} name="email" value={postcontact.email}  onChange={channgecontact}/>
                        <label htmlFor="floatingInput" style={{ fontFamily: "sans-serif", fontWeight: "lighter", fontSize: 20, }}>Email </label>
                    </div>
                </div>
                <div class="form-floating bg-transparent text-light" > 
                    <textarea className="form-control bg-transparent " placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} name="message"  value={postcontact.message}  onChange={channgecontact}></textarea>
                    <label htmlFor="floatingTextarea2 bg-transparent" style={{backgroundColor:'none', fontFamily: "sans-serif", fontWeight: "lighter", fontSize: 20, }}>Comments</label>
                </div>
                <button className="btn btn-outline-light btn-lg btn-block mt-2" style={{borderColor:"white"}} onClick={()=>{
                    addContact()
                }}
                >sent</button>
                {
                    contactmessage&&<span style={{color:'white',fontSize:20,top:350,position:"absolute"}}>Your message is Successfully submitted</span>
                }
            </div>

            <Footer />
        </>
    )
}