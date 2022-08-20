import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../index";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <Navbar bg="dark" variant='dark'>
      <Container>
        <NavLink style={{color:'white' }} className='text-decoration-none' to={SHOP_ROUTE}>Glamour Shop</NavLink>
        {user.isAuth ? 
        <Nav className="ml-auto" style={{color:'white'}}>
          <Button variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button>
          <Button variant={"outline-light"} className='ml-2' onClick={() => logOut()}>Выйти</Button>
        </Nav>  
    :
    <Nav className="ml-auto" style={{color:'white'}}>
        <Button variant={'outline-light'} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>     
    </Nav> 
    } 
      </Container>
    </Navbar>
  );
});
export default NavBar;
