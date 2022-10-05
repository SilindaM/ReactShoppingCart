import { Button, Card } from "react-bootstrap";
import { userShoppingCart } from "../context/shoppingCartContext";
import {formatCurrency} from "../utility/formatCurrency";

type StoreItemsProps={
    id:number,
    name:string,
    price:number,
    imgUrl:string
}

export function StoreItem({id,name,price,imgUrl}:StoreItemsProps){
     const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart}=userShoppingCart();
     const quantity=getItemQuantity(id)

    return(  
        
        <Card className="h-100">
                <Card.Img 
                variant="top" 
                src={imgUrl} 
                height="200"
                style={{objectFit:"cover"}}/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-2">{name}</span>
                        <span className="ms-2">{formatCurrency(price)}</span>
                    </Card.Title>
                    <div className="mt-auto">
                     {quantity === 0?(
                        <Button onClick={()=>increaseCartQuantity(id)}
                        className="w-100"
                        >Add To Cart</Button>
                     ):
                      <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                        <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                            <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                            <div>
                            <span className="fs-3">{quantity}</span>
                             In Cart
                            </div>
                            <Button  onClick={()=>increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button className="btn-danger" onClick={()=>removeFromCart(id)}>
                            Remove
                        </Button>
                      </div>
                     }
                    </div>
                </Card.Body>
       </Card>
    )
}