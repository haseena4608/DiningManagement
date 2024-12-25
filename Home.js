import Footer from './Footer'
import './Home.css'
export default function Home(props){
    return(
        <>
        <div className='user'>
        Hai there!! <span style={{color:"#FF6347",fontStyle:'italic'}}> {props.customername} </span>, Welcome to the flavorful world of culinary excellence!
        </div>
        <img src="/login.jpg" alt='' style={{width:1272 ,height : 590}}/>
       
            <pre className='texts'>Ego<br/>
                 Anger  <br/>
                 Hate<br/>
                 
                 EVERYTHING vanishes  <br/>
                 infront of DELIGHTFUL MEAL... <br/></pre>
                 <p className='para'>~ Unknown</p>
                 <Footer/>
        </>
    )
}