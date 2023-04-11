import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  return (
    <Container>
        <a>
          <img src='\images\logo.svg' alt="logo"/>
        </a>
        <Menu>
          {cars && cars.map((car, index)=>
          ((<a key={index} href="#">{car}</a>))
          )}
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          
        </RightMenu>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)}/>
          </CloseWrapper>
         
          
          <li><a href='#'></a>Existing Inventory</li>
          <li><a href='#'></a>Used Inventory</li>
          <li><a href='#'></a>Trade-In</li>
          <li><a href='#'></a>Test Drive</li>
          <li><a href='#'></a>Insurance</li>
          <li><a href='#'></a>Cybertruck</li>
          <li><a href='#'></a>Roadster</li>
          <li><a href='#'></a>Semi</li>
          <li><a href='#'></a>Charging</li>
          <li><a href='#'></a>Commercial Energy</li>
          <li><a href='#'></a>Find us</li>
          <li><a href='#'></a>Support</li>
          <li><a href='#'></a>Investor Relations</li>
          

        </BurgerNav>
    </Container>
  )
}

export default Header
 const Container = styled.div`
  min-height: 100px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: o 20px;
  top: 0;
  left: 40px;
  right: 40px;
  z-index: 16;
 `
 const Menu = styled.div`
 display: flex;
 align-item: center;
 justify-content: center;
 flex: 1;
 margin-left: 110px;

 a{
    font-weight: 530;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
 }
 @media(max-width: 768px){
  display: none;
 }

 `
const RightMenu = styled.div`
display: flex;
align-items: center;

a{
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
}
@media (max-width: 768px){
  display: none;

}
`
const CustomMenu = styled(MenuIcon)`
cursor: pointer;

`
const BurgerNav = styled.div`
position: fixed;
top:0;
bottom:0;
right:0;
background: white;
width: 300px;
height: 1000px;
z-index:100;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start; 
transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
transition: transform 0.2s;
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,.2);
  a{
    font-weight:600;
  }
}

`
const CustomClose= styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content:flex-end;
`