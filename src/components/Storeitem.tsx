import { Card, Button } from "react-bootstrap"
import {useShoppingCart}  from "../context/ShoppingCartContext"

type StoreItemsProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemsProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Card>
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{objectFit: "cover"}}
            />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <samp className="fs-2">{name}</samp>
                        <samp className="ms-2 text-muted">{price}</samp>
                    </Card.Title>
                </Card.Body>
                <div className="mt-auto">
                    {quantity===0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>Add to Cart</Button>
                    ): <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                        <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                        <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                        <div>
                            <span className="fs-3">{quantity}</span>in cart
                        </div>
                        <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                        </div>}
                </div>
        </Card>
    )

}