import { getFood } from './Api'
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from './Footer'
export default function Menu() {
    let [Food, setFood] = useState([])
    let [Search, setsearch] = useState("")

    let getData = async () => {
        let res = await getFood()
        setFood(res.data)


    }
    
    useEffect(() => {
        getData()
    }, [Food])
    return (
        <>
            <div style={{ top: 190, position: "relative" }}>
                <div className='main-content' style={{ position: 'absolute', top: -110, width: '97.5vw' }}>
                    <div style={{  color: 'black', position: 'fixed', marginTop: -10, width: '100%', marginLeft: 0, fontFamily: 'Arial, Helvetica, sans-serif', fontStyle: 'italic',paddingLeft:10,zIndex:2 }}>
                        <h3 style={{height:50,display:'flex',alignItems:'center'}} >Count Memories Not Calories</h3>
                       
                            
                                <div className="input-group float-end"style={{height:20,position:'fixed',top:81,right:27,width:300}}>
                                    <div className="input-group-prepend"  style={{borderColor:'black'}}>
                                        <span className="input-group-text" id="basic-addon1" style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Search</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Try typing 'Biriyani'" aria-label="Username" aria-describedby="basic-addon1" style={{fontFamily:'Arial, Helvetica, sans-serif',fontStyle:'italic'}}
                                    value={Search} onChange={(e)=>(setsearch(e.target.value))} />
                                </div>
                            
                       
                    </div>

                    <div className='row'style={{marginTop:60}}>
                        {
                            Food.filter(data=>data.food_name.toLowerCase().includes(Search.toLowerCase())).map((data) => (
                                
                                <div className='col-3' key={data.food_id} >
                                    <div className='card mb-3'>
                                        <div className='card-header bg-dark-subtle'><span style={{ fontWeight: 'bold', fontSize: 20 }}>{data.food_name}</span><span className='float-end'>ID:{data.food_id}</span></div>
                                        <div className='card-body'>
                                            <h5 className='card-title'>quantity: {data.quantity}</h5>
                                            <p className='card-text'>Price: {data.price}</p>


                                        </div>

                                    </div>

                                </div>
                                
                            ))
                        }

                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}