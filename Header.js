import { Link } from "react-router-dom";


import './Header.css'


export default function Header() {

    
    return (
        <>
           <div className="upper">
           <nav className="navbar fixed-top navbar-expand-lg navbar-sucess bg-black" id="header">
                <Link className="navbar-brand text-light" to="/home" id="logo">FoodKart</Link>
                <div  id="navba">
                    <ul className="navbar-nav ">

               
                    <li className="nav-item ">
                            <Link className="nav-link text-light link-success" to="/contact">Contact Us</Link>
                        </li>

                    <li className="nav-item ">
                            <Link className="nav-link text-light link-success" to="/orders">Orders</Link>
                        </li> 
                        <li className="nav-item ">
                            <Link className="nav-link text-light link-success" to='/cart' >Cart</Link>
                        </li>
                    <li className="nav-item ">
                            <Link className="nav-link text-light link-success" to="/additems">Add Items</Link>
                        </li>                       
                  
                        <li className="nav-item ">
                            <Link className="nav-link text-light link-success" to="/Menu">Menu </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-light link-success" to="/home">Home </Link>
                        </li>
                                              
                        <li className="nav-item ">
                            <a className="nav-link text-light link-success" href="/" >Log Out</a>
                        </li>

                    </ul>
                
                </div>
            </nav>
            
           </div>
           
        </>
    )
}