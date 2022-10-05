import { Button, Container, Nav, Navbar, NavLink  } from "react-bootstrap"
import { userShoppingCart } from "../context/shoppingCartContext"

export function NavigationBar(){
 
   const {openCart,cartQuantity}=userShoppingCart()

     return (
      <Navbar  sticky="top" className="bg-white shadow-sm mb-3">
         <Container>
           <Nav className="me-auto">
           <Nav.Link to="/" as={NavLink}>
               Home
            </Nav.Link>
            <Nav.Link to="/store " as={NavLink}>
               Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
               About
            </Nav.Link>
           </Nav>
           {cartQuantity >0 &&(
           <Button onClick={openCart} style={{position:"relative",width:"3rem",height:"3rem"}}
                   variant="outline-primary"
                   className="rounded-circle">Click
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{
               color:"white",width:"1.5rem",height:"1.5rem",
               position:"absolute",
               bottom:0,
               right:0,
               transform:"translate(25%,25%)",
            }}>{cartQuantity}</div>justify
            </Button>
           )}
         </Container>
      </Navbar>
     )
}