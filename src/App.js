import React,{useState, useEffect} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import{
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Row,
  Button
} from "reactstrap"
import CreateProduct from './Pages/CreateProduct';
import ProductCatalog from './Pages/ProductCatalog';
import ProductDetal from './Pages/ProductDetail';
import EditProduct from './Pages/EditProduct';

const App = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const login = () =>{
    setTimeout(function(){
      setIsLogged(true)
      localStorage.setItem("isLogged", "true")
    },1500)
  }
  const logOut= () =>{
    localStorage.removeItem("isLogged")
    setIsLogged(false)
  }

  useEffect(() =>{
    const logged = localStorage.getItem("isLogged")
    console.log(logged)
    logged && setIsLogged(true)
  },[])

  const links = [
    {
      label: "Catálogo",
      path: ""
    },
    {
      label: "Carrito",
      path: "shopping-cart"
    },
    {
      label: "Crear producto",
      path: "create-product"
    },
  ]
  return (
    <Router>
      {
        !isLogged && 
        <>
        <h1>Debes iniciar sesión</h1>
        <Button type='button' onClick={login}> Iniciar sesión</Button>
        </>
      }
      
      { isLogged &&
        <>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                {
                  links.map((link, index) =>{
                    return(
                      <NavItem key={index}>
                        <Link to={`/${link.path}`} className="nav-link">{`${link.label}`}</Link>
                      </NavItem>
                    )   
                  })
                }
                <Button className='log-out' type='button' onClick={logOut}>Log Out</Button>
              </Nav>
            </Collapse>
        </Navbar>
        <Container>
          <Row>
            <Routes>
              <Route path="/" element={<ProductCatalog/>} />
              <Route path="/shopping-cart" element={<h1>Carrito</h1>} />
              <Route path="/create-product" element={<CreateProduct/>} />
              <Route path="/product-detail/:id" element={<ProductDetal/>} />
              <Route path="/edit-product/:id" element={<EditProduct/>} />
            </Routes>
          </Row>
        </Container>
        </>
      }
    </Router>
  );
}

export default App;
