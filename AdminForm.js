import { useState } from 'react';
import './AdminForm.css';
export default function AdminForm(props){
   const [product,setproduct]= useState(props.data)
   let changeFormData = (e)=>{
    const {name,value}=e.target
    setproduct({...product,[name]:value})
   }
    return(
        <>
        <div className="form-overlay">  
        <form style={{borderRadius:15}}>
            <div className="form-group">
                <label>Name:  </label><br/>
                <input type="text" name="food_name" placeholder="Enter Name" defaultValue={product.name} onChange={changeFormData}/>
            </div>
            <div className="form-group">
                <label>Quantity:  </label><br/>
                <input type="number" defaultValue={product.quantity} name="quantity" placeholder="Enter Quantity"  onChange={changeFormData}/>
            </div>
            <div className="form-group">
                <label>Price:  </label><br/>
                <input type="number" name="price" placeholder="Enter Price" defaultValue={product.price} onChange={changeFormData}/>
            </div>
            <button className="btn btn-primary float-end" onClick={(e)=>{
                e.preventDefault()
                props.add(product)
            }}>Update</button>
            <button className="btn btn-danger float-end" onClick={(e)=>{
                e.preventDefault()
                props.close()
            }}>Cancel</button>
        </form>

        </div>
        </>
    )
}