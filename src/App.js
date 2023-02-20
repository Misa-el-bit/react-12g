import React,{useState} from 'react';
import './App.scss';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Row,
  Col
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//Pages
import CreateProducts from './Pages/CreateProducts';
import ProductCatalog from './Pages/ProductCatalog';
import ShoopingCart from './Pages/ShoppingCart';
import ProductDetail from './Pages/ProductDetail';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [selectedPage, setSelectedPage] = useState("createProducts")

  const productData = [{
    name: "product 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eos.",
    id: 1
  },{
    name: "product 2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eos.",
    id: 2
  },{
    name: "product 3",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eos.",
    id: 3
  }]

  const links = [
    {
      path:"/create-products",
      text:"Crear Productos"
    },{
      path:"/product-catalog",
      text:"Catalogo de Productos"
    },{
      path:"/shopping-cart",
      text:"Carrito de Compras"
    },
  ]

  return (
    <Router>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {
              links.map((link, index) =>{
                const {path, text} = link
                return (
                  <NavItem key={index}>
                    <Link to={path} className='nav-item'>{text}</Link>
                  </NavItem>
                )
              })
            }
          </Nav>
        </Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col xs="12">
          <Routes>
            <Route path="/create-products" element={<CreateProducts />} />
            <Route path="/product-catalog" element={<ProductCatalog data = {productData}/>} />
            <Route path="/shopping-cart" element={<ShoopingCart />} />
            <Route path="/product-detail/:id" element={<ProductDetail/>} />
          </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
