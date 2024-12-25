import { useEffect, useState } from 'react'
import { getFood,postFood,deleteFood,putFood} from './Api'
import Login from './Login'
import AdminForm from './AdminForm'

export default function Adminpanel() {

    let [Food, setFood] = useState([])
    let [openForm,setOpenForm]=useState(false)
    let [editForm,setedit]=useState(false)
    let [openlogin,setOpenlogin]=useState(false)
    let [initialForm,setForm]=useState({
        food_name:'',quantity:'',price:''
    })
    
    let getData = async () => {
        let res = await getFood()
         setFood(res.data)

    }
  
    useEffect(() => {
        getData()
    }, [Food])

    let showLogin =()=>{
        setOpenlogin(true)
    }
    if(openlogin){
        return <Login/>
    }
    let showForm =()=>{
        setOpenForm(true)
        setForm({
            food_name:'',quantity:'',price:''
        })

    }
    let closeForm =()=>{
        setOpenForm(false)
    }
    
       
    let deleteData = async (id) => {
     await deleteFood(id)
     getFood()
  }
   let addproduct = async (product) => {
       if(editForm){
        await putFood(product)
    }
    else{
        await postFood(product)
    }
     
     getFood()
     setOpenForm(false)
  }
  let editProduct = async (data) => {
    setForm(data)
    getFood()
    setOpenForm(true)
    setedit(true)
 }
    return (
        <>
            <div>
                <div style={{ position: 'absolute', top: 20, left: 500, width: 900, border: '2 solid black' }}>
                    <h1 style={{ position: "absolute", left: 25 }}>Admin Panel</h1>
                 
                    <button className='btn btn-primary btn-lg btn-block' style={{ width: 300, top: 50, position: "absolute" }} onClick={
                        ()=>{
                    
                            showForm()
                         
                        }
                    }>Add Item</button>
                    <button className='btn btn-danger btn-lg btn-block' style={{ width: 300, top: 105, position: "absolute"}} onClick={()=>{
                        showLogin()
                    }}>Log out</button>
                </div>
            </div>

            <div style={{ top: 190, position: "absolute" }}>
                <div className='main-content'>
                    <div className='row'>
                        {
                            Food.map((data)=>(
                                <div className='col-3' key={data.food_id}>
                                    <div className='card mb-3'>
                                        <div className='card-header bg-dark-subtle'><h5>{data.food_name}</h5></div>
                                        <div className='card-body'>
                                            <h5 className='card-title'>quantity: {data.quantity}</h5>
                                            <p className='card-text'>Price: {data.price}</p>
                                            <div><button className='btn btn-success' onClick={
                                                ()=>{
                                                    editProduct(data)
                                                }
                                            }>Edit</button>
                                            <button className='btn btn-danger'style={{marginLeft:10}} onClick={
                                                ()=>{
                                                    deleteData(data.food_id)
                                                }
                                            }>Delete</button></div>
                                        </div>

                                    </div>

                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>
            {
                openForm&&<AdminForm close={closeForm} data={initialForm} add={addproduct}/>
            }


        </>
    )
}