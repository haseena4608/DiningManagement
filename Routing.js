import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './Menu';
import Adminpanel from './Adminpanel';
import Header from './Header';
import Contact from './Contact';
import AddItems from './AddItems';
import Orders from './Orders';
import Mycart from './Mycart';


function Routing(props) {
 // console.log(props);
  return (
   <>
    <BrowserRouter>  
   <Header></Header>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/home' element={<Home  customername={props.customername}/>}/>
      <Route path ='/Menu' element={<Menu/>}/>
      <Route path ='/admin' element={<Adminpanel/>}/>
      <Route path ='/contact' element={<Contact/>}/>
      <Route path ='/additems' element={<AddItems customerid={props.customerid}/>}/>
      <Route path ='/orders' element={<Orders customerid={props.customerid}/>}/>
      <Route path ='/cart' element={<Mycart customerid={props.customerid}/>}/>
     
    </Routes>
    </BrowserRouter>
    
    
   </>
  );
}

export default Routing;
