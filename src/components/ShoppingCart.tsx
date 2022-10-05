import { Offcanvas } from "react-bootstrap";
import { userShoppingCart } from "../context/shoppingCartContext";

type Prop={
    isOpen:boolean;
}

export function ShoppingCart({isOpen}:Prop){
    const {closeCart}= userShoppingCart() 
    return
   (
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
     </Offcanvas>
   )
}