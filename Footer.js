import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
export default function Footer(){
    return(
        <>
         <Navbar  style={{ backgroundColor:"black",position:'fixed',bottom:0 , width:'100vw'}}>
            <Container>
                <Navbar.Text className='text-light'>
                    © 2024 FoodKart
                </Navbar.Text>
                <Navbar.Text className="ml-auto text-light">
                    <span >info@foodkart.com</span>
                </Navbar.Text>
            </Container>
        </Navbar>
        </>
    )
}

